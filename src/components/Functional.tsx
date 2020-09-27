import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import {
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Badge,
} from "reactstrap";
import { Article, ArticleKeyword, Results } from "./NYTInterfaces";
import "../components/functionalcss.css";

export const Functional: React.FunctionComponent = () => {
	const [results, setResults] = useState<Results>({
		docs: [],
		meta: {
			hits: 0,
			offset: 0,
			time: 0,
		},
	});

	return (
		<div className="FunctionalMain">
			<ClassComponent setResults={setResults} results={results} />
			<br />
			{results === undefined || results.docs.length === 0 ? (
				<span>
					<br />
					<br />
					<br />
					<br />
				</span>
			) : (
				<ListGroup>
					<ListGroupItem active>
						<ListGroupItemHeading>search results : </ListGroupItemHeading>
					</ListGroupItem>
					{results.docs.map((article: Article) => {
						return (
							<ListGroupItem
								key={article.web_url + article._id + article.pub_date}
							>
								<ListGroupItemHeading>
									<a href={article.web_url} target="_blank">
										{article.headline.main}
									</a>
								</ListGroupItemHeading>
								<br />
								{article.multimedia[0] === undefined ? (
									<span></span>
								) : (
									<span>
										<img
											src={
												"http://www.nytimes.com/" +
												article.multimedia[0].url +
												""
											}
											height="90%"
										/>
										<br />
										<br />
									</span>
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
										article.keywords.map(function (keyword: ArticleKeyword) {
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
					})}
				</ListGroup>
			)}

			<br />
			{/* PAGINATE HERE */}
		</div>
	);
};
