import { Route, Routes } from 'react-router-dom';

import routerConfig from './routes';
import Home from './pages/Home'
import { ReactElement } from 'react';

const App = (): ReactElement => (
  <Routes>
    <Route path='/' element={<Home />} />
    {routerConfig[0].children.map(item => (
      <Route key={item.path} path={item.path} element={<item.component />} />
    ))}
  </Routes>
);


export default App;