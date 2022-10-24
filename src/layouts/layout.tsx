import React from 'react';
import { Header, Footer } from 'components';
import { ContentPage } from 'pages/ContentPage';
import { GalleryPage } from 'pages/GalleryPage';
import { RESPONSIVE_SIZES } from 'consts';
import { useMediaQuery } from 'utils/useMediaQuery';
import { LogoIcon, PhoneIcon } from 'assets/imgs';
import { data } from 'mock';

const pageOne = Object.assign({}, ...data.filter((page) => page.pageId === 1));
const pageTwo = Object.assign({}, ...data.filter((page) => page.pageId === 2));

export const Layout = (): JSX.Element => {
    const TABLET_DEVICE = useMediaQuery(`(max-width: ${RESPONSIVE_SIZES.TABLET}px)`);

    return (
        <>
            <Header>
                <LogoIcon />
                {!TABLET_DEVICE ? (
                    <a href="tel:+7 (495) 495-49-54">+7 (495) 495-49-54</a>
                ) : (
                    <PhoneIcon />
                )}
            </Header>
            <ContentPage item={pageOne} />
            <GalleryPage />
            <ContentPage item={pageTwo} />
            <Footer>© TEST, 1022–2022</Footer>
        </>
    );
};
