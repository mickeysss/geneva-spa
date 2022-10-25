import {
    ContentImage1,
    ContentImage2,
    ContentImage3,
    ContentImage4,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
} from 'assets/imgs';
import { IDataItem } from '../types';

export const data: IDataItem[] = [
    {
        typeRef: 'TEXT',
        pageId: 1,
        title: 'ut aliquip ex ea commodo consequat',
        contentList: [
            {
                id: 1.1,
                position: 'LEFT',
                contentImage: ContentImage1,
                contentMainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                contentAdditionalText: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                ],
            },
            {
                id: 1.2,
                position: 'RIGHT',
                contentImage: ContentImage2,
                contentMainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                contentAdditionalText: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                ],
            },
        ],
    },
    {
        typeRef: 'GALLERY',
        title: 'Lorem ipsum dolor sit.',
        pageId: 3,
        images: [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8],
    },
    {
        typeRef: 'TEXT',
        pageId: 2,
        title: 'ut aliquip ex ea commodo consequat',
        contentList: [
            {
                id: 2.1,
                position: 'LEFT',
                contentImage: ContentImage3,
                contentMainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                contentAdditionalText: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                ],
            },
            {
                id: 2.2,
                position: 'RIGHT',
                contentImage: ContentImage4,
                contentMainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                contentAdditionalText: [
                    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n',
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                ],
            },
        ],
    },
];
