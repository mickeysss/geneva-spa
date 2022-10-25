import React from 'react';
import { ContentPage } from '../../pages/ContentPage';
import { GalleryPage } from '../../pages/GalleryPage';
import { IDataItem } from '../../types';

interface IMain {
    content: IDataItem[];
}

export const Main = ({ content }: IMain): JSX.Element => {
    return (
        <main>
            {content.map((page: IDataItem) => (
                <>
                    {page.typeRef === 'TEXT' ? (
                        <ContentPage pageData={page} />
                    ) : (
                        <GalleryPage pageData={page} />
                    )}
                </>
            ))}
        </main>
    );
};
