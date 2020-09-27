export interface Results {
	docs: Article[];
	meta: {
		hits: number;
		offset: number;
		time: number;
	};
}
export interface ArticleList {
	docs: Article[];
	meta: {
		hits: number;
		offset: number;
		time: number;
	};
}
export interface Article {
	abstract: string;
	byline: ArticleByline;
	document_type: string;
	headline: ArticleHeadline;
	keywords: ArticleKeyword[];
	lead_paragraph: string;
	multimedia: ArticleMultimedia[];
	news_desk: string;
	print_page: string;
	print_section: string;
	pub_date: string;
	section_name: string;
	snippet: string;
	source: string;
	type_of_material: string;
	uri: string;
	web_url: string;
	word_count: number;
	_id: string;
}
export interface ArticleByline {
	organization: string | null;
	original: string;
	person: ArticleBylinePerson[];
}
export interface ArticleBylinePerson {
	firstname: string;
	lastname: string;
	middlename?: string;
	organization: string;
	qualifier?: string;
	rank: number;
	role: string;
	title?: string;
}
export interface ArticleHeadline {
	content_kicker: string | null;
	kicker: string | null;
	main: string;
	name: string | null;
	print_headline: string;
	seo: string | null;
	sub: string | null;
}
export interface ArticleKeyword {
	name: string;
	value: string;
	rank: number;
	major: string;
}
export interface ArticleMultimedia {
	url: string;
	0: {
		caption: null | string;
		credit: null | string;
		crop_name: string;
		height: number;
		legacy: ArticleMultimediaLegacy[];
		rank: number;
		subType: string;
		subtype: string;
		type: string;
		url: string | null;
		width: number;
	};
}
export interface ArticleMultimediaLegacy {
	xlarge: string;
	xlargeheight: number;
	xlargewidth: number;
}
