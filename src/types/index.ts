export interface IContentItem {
    id: number;
    contentImage: string;
    contentMobileImage: string;
    contentMainText: string;
    contentAdditionalText: string[];
}

export interface IDataItem {
    pageId: number;
    title: string;
    contentList: IContentItem[];
}
