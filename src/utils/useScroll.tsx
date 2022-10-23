import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight > 100) {
                const calcScroll = totalScroll / windowHeight;
                setScroll(calcScroll);
            } else {
                setScroll(0);
            }
        };
        window.addEventListener('scroll', progressBarHandler);

        return () => window.removeEventListener('scroll', progressBarHandler);
    }, [scroll, false]);

    return Math.floor(scroll * 100);
};
