import {
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
} from 'assets/imgs';

export const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
];

export enum RESPONSIVE_SIZES {
    DESKTOP = 1149,
    TABLET = 768,
    MOBILE = 500,
}

export const responsiveBreakPoints = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1500, min: 800 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1.5,
    },
};
