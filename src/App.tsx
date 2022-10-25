import React from 'react';
import { Layout } from 'layouts';
import 'assets/global.css';
import { data } from './mock';

export const App = () => {
    return <Layout state={data} />;
};
