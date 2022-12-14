import React from 'react';
import { Title } from 'components';
import { IContentItem } from 'types';
import { RESPONSIVE_SIZES } from 'consts';
import { useMediaQuery } from 'hooks/useMediaQuery';
import styles from './index.module.css';

interface IContentBlock {
    contentItem: IContentItem;
}

export const ContentBlock: React.FC<IContentBlock> = ({ contentItem }): JSX.Element => {
    const DESKTOP_DEVICE = useMediaQuery(`(max-width: ${RESPONSIVE_SIZES.DESKTOP}px)`);

    return (
        <div className={styles.contentBlockContainer} key={contentItem.id}>
            {contentItem.position === 'LEFT' ? (
                <div className={styles.contentBlockItemContainerEven}>
                    <div className={styles.contentBlockItem}>
                        <img src={contentItem.contentImage} alt="person" />
                    </div>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string, index) => (
                            <p key={index} className={styles.contentAdditionalText}>
                                {contentItemText}
                            </p>
                        ))}
                    </div>
                </div>
            ) : DESKTOP_DEVICE ? (
                <div className={styles.contentBlockItemContainerOdd}>
                    <div className={styles.contentBlockItem}>
                        <img
                            className={styles.contentBlockItemHero}
                            src={contentItem.contentImage}
                            alt="person"
                        />
                    </div>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string) => (
                            <p key={contentItem.id} className={styles.contentAdditionalText}>
                                {contentItemText}
                            </p>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.contentBlockItemContainerOdd}>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string) => (
                            <p key={contentItem.id} className={styles.contentAdditionalText}>
                                {contentItemText}
                            </p>
                        ))}
                    </div>
                    <div className={styles.contentBlockItem}>
                        <img
                            className={styles.contentBlockItemHero}
                            src={contentItem.contentImage}
                            alt="person"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
