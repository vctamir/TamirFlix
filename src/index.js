import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home/index.js';
import CadastroVideos from './pages/cadastro/video';
import CadastroCategorias from './pages/cadastro/categorias';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/videos" component={CadastroVideos} />
            <Route path="/cadastro/categorias" component={CadastroCategorias} />
            <Route component={() => (<div>Pagína 404</div>)} />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')
);