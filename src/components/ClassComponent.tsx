import React, { Component } from "react";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Pagination,
	PaginationItem,
	PaginationLink,
} from "reactstrap";
import { Results } from "./NYTInterfaces";
const APIKEY = "&api-key=UQesaw4sGhG9epGh9O6KX2dPnw7P6sUK";
const BASE: string = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export interface ClassProps {
	setResults: React.Dispatch<React.SetStateAction<Results>>;
	results: Results;
}
export interface ClassState {
	term: string;
	start: string;
	end: string;
	pageCount: number;
	firstSearch: boolean;
}

export default class ClassComponent extends Component<ClassProps, ClassState> {
	constructor(props: ClassProps) {
		super(props);
		this.state = {
			term: "search",
			start: "",
			end: "",
			pageCount: 1,
			firstSearch: false,
		};
	}

	formSubmitted(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		this.pageChange(0);
	}

	pageChange(pageChange: number): void {
		let oldPage = this.state.pageCount;
		let newPage = pageChange + oldPage;
		this.setState({ pageCount: newPage });
		this.buildURL();
	}

	buildURL(page?: number): void {
		let query = "";
		let startDate = "";
		let endDate = "";
		let fetchUrl = BASE;
		if (this.state.term.split(" ").length > 0) {
			this.state.term.split(" ").map((arr) => {
				query += `?q=${arr}`;
			});
			fetchUrl += query;
		}
		if (this.state.start !== "") {
			let consolidate = this.state.start.split("-").join("");
			startDate = `&begin_date=${consolidate}`;
			fetchUrl += startDate;
		}
		if (this.state.end !== "") {
			let consolidate = this.state.start.split("-").join("");
			endDate = `&end_date=${consolidate}`;
			fetchUrl += endDate;
		}
		page === undefined
			? (fetchUrl += `&page=${this.state.pageCount}`)
			: (fetchUrl += `&page=${page}`);
		fetchUrl += APIKEY;
		this.handleSubmit(fetchUrl);
	}

	async handleSubmit(fetchUrl: string) {
		let result = await fetch(fetchUrl);
		let json = await result.json();
		json ? this.props.setResults(json.response) : console.log("Fetch Failed.");
	}

	render() {
		return (
			<div>
				<Form
					onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
						this.formSubmitted(event)
					}
				>
					<FormGroup>
						<Label for="searchTerm">enter search term: </Label>
						<Input
							type="text"
							name="searchTerm"
							id="searchTerm"
							placeholder="'cats, dogs, and the forces that control them'"
							onChange={(e) =>
								this.setState({ term: e.target.value, pageCount: 0 })
							}
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="startDate">begin search: (optional)</Label>
						<Input
							type="date"
							name="startDate"
							id="startDate"
							placeholder="date placeholder"
							onChange={(e) => this.setState({ start: e.target.value })}
						/>
						<Label for="endDate">end search: (optional)</Label>
						<Input
							type="date"
							name="endDate"
							id="endDate"
							placeholder="date placeholder"
							onChange={(e) => this.setState({ end: e.target.value })}
						/>
					</FormGroup>
					<Button type="submit"> s e a r c h </Button>
				</Form>
				{this.props.results === undefined ? (
					<span></span>
				) : (
					<div className="paginationArrows">
						{this.state.pageCount > 1 ? (
							<Pagination
								size="lg"
								aria-label="Page navigation back"
								className="float-left"
							>
								<PaginationItem>
									<PaginationLink
										previous
										onClick={() => this.pageChange(-1)}
									/>
									{/*  // back 1 */}
								</PaginationItem>
							</Pagination>
						) : (
							<span></span>
						)}
						{this.props.results.docs.length <= 10 ? (
							<Pagination
								size="lg"
								aria-label="Page navigation forward"
								className="float-right"
							>
								<PaginationItem>
									<PaginationLink next onClick={() => this.pageChange(1)} />
									{/*  // forward 1 */}
								</PaginationItem>
							</Pagination>
						) : (
							<span></span>
						)}
					</div>
				)}
			</div>
		);
	}
}
