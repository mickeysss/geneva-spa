import React from 'react';
import { Title } from 'components/Title';
import { ContentBlock } from './components/ContentBlock';
import { IContentItem, IDataItem } from 'types';
import styles from './index.module.css';

interface IContentPage {
    pageData: IDataItem;
}

export const ContentPage = ({ pageData }: IContentPage): JSX.Element => {
    return (
        <section className={styles.pageSection}>
            <div className={styles.sectionWrapper}>
                <Title titleType="h2">{pageData.title}</Title>
                {pageData.contentList &&
                    pageData.contentList.map((contentItem: IContentItem) => (
                        <ContentBlock key={contentItem.id} contentItem={contentItem} />
                    ))}
            </div>
        </section>
    );
};
