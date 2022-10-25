import React from 'react';
import styles from './index.module.css';

interface IHeader {
    children: React.ReactNode;
}

export const Header: React.FC<IHeader> = ({ children }): JSX.Element => {
    return <header className={styles.header}>{children}</header>;
};
