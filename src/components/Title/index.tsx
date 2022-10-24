import React from 'react';
import styles from './index.module.css';

interface ITitle {
    children: React.ReactNode;
    titleType: string;
    justifyStart?: boolean;
}

export const Title: React.FC<ITitle> = ({
    children,
    titleType,
    justifyStart = false,
}): JSX.Element => {
    return (
        <>
            {titleType === 'h1' && <h1 className={styles.titleH1}>{children}</h1>}
            {titleType === 'h2' && (
                <h2
                    style={{ justifyContent: justifyStart ? 'flex-start' : undefined }}
                    className={styles.titleH2}>
                    {children}
                </h2>
            )}
            {titleType === 'h3' && <h3 className={styles.titleH3}>{children}</h3>}
        </>
    );
};
