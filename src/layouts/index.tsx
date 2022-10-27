import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { RESPONSIVE_SIZES } from 'consts';
import { IDataItem } from 'types';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { LogoIcon, PhoneIcon } from 'assets/imgs';

interface ILayout {
    state: IDataItem[];
}

export const Layout = ({ state }: ILayout): JSX.Element => {
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
            <Main content={state} />
            <Footer>© TEST, 1022–2022</Footer>
        </>
    );
};
