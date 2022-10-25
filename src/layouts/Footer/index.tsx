import React from 'react';
import styles from './index.module.css';

interface IFooter {
    children: React.ReactNode;
}

export const Footer: React.FC<IFooter> = ({ children }): JSX.Element => {
    return <footer className={styles.footer}>{children}</footer>;
};
