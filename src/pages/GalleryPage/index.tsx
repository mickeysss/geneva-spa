import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Title } from 'components';
import { RESPONSIVE_SIZES, responsiveBreakPoints } from 'consts';
import { useScroll } from 'hooks/useScroll';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { IDataItem } from 'types';
import styles from './index.module.css';

interface IGalleryPage {
    pageData: IDataItem;
}

export const GalleryPage = ({ pageData }: IGalleryPage): JSX.Element => {
    const [scroll, setScroll] = useState(false);
    const MOBILE_DEVICE = useMediaQuery(`(max-width: ${RESPONSIVE_SIZES.MOBILE}px)`);

    const currentScroll = useScroll();

    useEffect(() => {
        if (currentScroll) {
            setScroll(currentScroll > 40 && currentScroll < 60);
        }
    }, [currentScroll]);

    return (
        <section className={styles.galleryContainer}>
            <Title justifyStart={true} titleType="h2">
                {pageData.title}
            </Title>
            <div className={styles.sliderWrapper}>
                {pageData.images && (
                    <Carousel
                        keyBoardControl={true}
                        swipeable={true}
                        infinite={true}
                        customTransition="all 2s linear"
                        autoPlaySpeed={1000}
                        autoPlay={!MOBILE_DEVICE && scroll}
                        arrows={false}
                        responsive={responsiveBreakPoints}>
                        {pageData.images.map((galleryImage, index) => (
                            <img
                                key={index}
                                className={styles.sliderImage}
                                src={galleryImage}
                                alt="slider-image"
                            />
                        ))}
                    </Carousel>
                )}
            </div>
        </section>
    );
};
