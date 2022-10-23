import React from 'react';
import { Title } from 'components';
import styles from './index.module.css';
import { RESPONSIVE_SIZES } from 'consts';
import { useMediaQuery } from 'utils/useMediaQuery';
import { IContentItem } from 'types';

interface IContentBlock {
    contentItem: IContentItem;
}

export const ContentBlock: React.FC<IContentBlock> = ({ contentItem }): JSX.Element => {
    const matches = (size: number) => useMediaQuery(`(max-width: ${size}px)`);

    return (
        <div className={styles.contentBlockContainer} key={contentItem.id}>
            {contentItem.id % 2 !== 0 ? (
                <div className={styles.contentBlockItemContainerEven}>
                    <div className={styles.contentBlockItem}>
                        <img src={contentItem.contentImage} alt="person" />
                    </div>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string) => (
                            <p className={styles.contentAdditionalText}>{contentItemText}</p>
                        ))}
                    </div>
                </div>
            ) : matches(RESPONSIVE_SIZES.DESKTOP) ? (
                <div className={styles.contentBlockItemContainerOdd}>
                    <div className={styles.contentBlockItem}>
                        <img
                            className={styles.contentBlockItemHero}
                            src={
                                !matches(RESPONSIVE_SIZES.TABLET)
                                    ? contentItem.contentImage
                                    : contentItem.contentMobileImage
                            }
                            alt="person"
                        />
                    </div>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string) => (
                            <p className={styles.contentAdditionalText}>{contentItemText}</p>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.contentBlockItemContainerOdd}>
                    <div className={styles.contentBlockItem}>
                        <Title titleType="h3">{contentItem.contentMainText}</Title>
                        {contentItem.contentAdditionalText.map((contentItemText: string) => (
                            <p className={styles.contentAdditionalText}>{contentItemText}</p>
                        ))}
                    </div>
                    <div className={styles.contentBlockItem}>
                        <img
                            className={styles.contentBlockItemHero}
                            src={
                                !matches(RESPONSIVE_SIZES.TABLET)
                                    ? contentItem.contentImage
                                    : contentItem.contentMobileImage
                            }
                            alt="person"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
