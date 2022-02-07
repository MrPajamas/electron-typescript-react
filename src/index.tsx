import { render } from "react-dom";
import '@alifd/next/dist/next.css';

import Layout from './Layout'
import App from "./App";
import routerConfig from './routes';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle'
render(
  <HashRouter>
    <GlobalStyle />
    <Layout children={App} routerConfig={routerConfig} />
  </HashRouter>,
  document.getElementById("App"));
