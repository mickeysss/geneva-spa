import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Title } from 'components';
import { galleryImages, RESPONSIVE_SIZES, responsiveBreakPoints } from 'consts';
import { useScroll } from 'utils/useScroll';
import styles from './index.module.css';
import { useMediaQuery } from '../../utils/useMediaQuery';

export const GalleryPage = () => {
    const [scroll, setScroll] = useState(false);
    const matches = (size: number) => useMediaQuery(`(max-width: ${size}px)`);

    const currentScroll = useScroll();

    useEffect(() => {
        setScroll(currentScroll > 40 && currentScroll < 60);
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
                        customTransition="all 7s linear"
                        autoPlay={!matches(RESPONSIVE_SIZES.MOBILE) && scroll}
                        autoPlaySpeed={1000}
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
