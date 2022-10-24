import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Title } from 'components';
import { galleryImages, RESPONSIVE_SIZES, responsiveBreakPoints } from 'consts';
import { useScroll } from 'utils/useScroll';
import { useMediaQuery } from 'utils/useMediaQuery';
import styles from './index.module.css';

export const GalleryPage = () => {
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
                Lorem ipsum dolor sit.
            </Title>
            <div className={styles.sliderWrapper}>
                {galleryImages.length && (
                    <Carousel
                        keyBoardControl={true}
                        swipeable={true}
                        infinite={true}
                        customTransition="all 2s linear"
                        autoPlaySpeed={1000}
                        autoPlay={!MOBILE_DEVICE && scroll}
                        arrows={false}
                        responsive={responsiveBreakPoints}>
                        {galleryImages.map((galleryImage, index) => (
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
