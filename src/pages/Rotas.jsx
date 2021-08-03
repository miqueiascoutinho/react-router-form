import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Sobre from './sobre/Sobre';

const rota = [
    {
        path: '/',
        component: <Home />,
        exact: true,
    },
    {
        path: '/sobre',
        component: <Sobre />,
        exact: false,
    }
];

const Rotas = () => {
    return (
        rota.map((r, index) => (
            <Route path={r.path} key={index} exact={r.exact}>
                {r.component}
            </Route>
        ))
    );
}

export default Rotas;