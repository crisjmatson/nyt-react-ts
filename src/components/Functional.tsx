import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Badge,
} from "reactstrap";
import "../components/functionalcss.css";

export const Functional = () => {
	const [results, setResults] = useState([]);

	return (
		<div>
			<ClassComponent setResults={setResults} results={results} />
			<br />
			<ListGroup>
				<ListGroupItem active>
					<ListGroupItemHeading>search results : </ListGroupItemHeading>
				</ListGroupItem>

				{results.length > 0 ? (
					results.map((article: any) => {
						//let num: number = results.indexOf(article);
						return (
							<ListGroupItem key={article.multimedia.length}>
								<ListGroupItemHeading>
									<a href={article.web_url} target="_blank">
										{article.headline.main}
									</a>
								</ListGroupItemHeading>
								<br />
								{article.multimedia[0] !== undefined ? (
									<span>
										<img
											src={
												"http://www.nytimes.com/" +
												article.multimedia[0].url +
												""
											}
											width="90%"
										/>
										<br />
										<br />
									</span>
								) : (
									<span></span>
								)}

								<ListGroupItemText>
									<span>{article.lead_paragraph}</span>
									<br />
									tags:{" "}
									{article.keywords.length === 0 ? (
										<Badge pill className="articleTags">
											none
										</Badge>
									) : (
										article.keywords.map(function (keyword: any) {
											return (
												<Badge pill className="articleTags">
													{keyword.value}
												</Badge>
											);
										})
									)}
								</ListGroupItemText>
							</ListGroupItem>
						);
					})
				) : (
					<ListGroupItem>
						<br />
						<br />
						<p>...</p>
						<br />
						<br />
					</ListGroupItem>
				)}
			</ListGroup>
			<br />
			{/* PAGINATE HERE */}
		</div>
	);
};
