export interface IContentItem {
    id: number;
    contentImage: string;
    contentMainText: string;
    contentAdditionalText: string[];
    position: string;
}

export interface IDataItem {
    typeRef: string;
    pageId: number;
    title?: string;
    images?: string[];
    contentList?: IContentItem[];
}
