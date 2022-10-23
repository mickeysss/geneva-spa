import React from 'react';
import { Title } from 'components/Title';
import { ContentBlock } from './components/ContentBlock';
import { IContentItem, IDataItem } from 'types';
import styles from './index.module.css';

interface IContentPage {
    item: IDataItem;
}

export const ContentPage = ({ item }: IContentPage): JSX.Element => {
    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <Title titleType="h2">{item.title}</Title>
                {item.contentList.map((contentItem: IContentItem) => (
                    <ContentBlock contentItem={contentItem} />
                ))}
            </section>
        </div>
    );
};
