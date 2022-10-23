import React from 'react';
import { Header, Footer } from 'components';
import { ContentPage } from 'pages/ContentPage';
import { GalleryPage } from 'pages/GalleryPage';
import { useMediaQuery } from 'utils/useMediaQuery';
import { LogoIcon, PhoneIcon } from 'assets/imgs';
import { RESPONSIVE_SIZES } from 'consts';
import { data } from 'mock';
import styles from './index.module.css';

const pageOne = Object.assign({}, ...data.filter((page) => page.pageId === 1));
const pageTwo = Object.assign({}, ...data.filter((page) => page.pageId === 2));

export const Layout = (): JSX.Element => {
    const matches = (size: number) => useMediaQuery(`(max-width: ${size}px)`);

    return (
        <>
            <Header>
                <LogoIcon />
                {!matches(RESPONSIVE_SIZES.TABLET) ? (
                    <a href="tel:+7 (495) 495-49-54">+7 (495) 495-49-54</a>
                ) : (
                    <PhoneIcon className={styles.phoneLogo} />
                )}
            </Header>
            <ContentPage item={pageOne} />
            <GalleryPage />
            <ContentPage item={pageTwo} />
            <Footer>© TEST, 1022–2022</Footer>
        </>
    );
};
