import Home from './pages/Home/index';
import Other from './pages/Other/index';
import Layout from './Layout'

const routerConfig = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/other',
        component: Other,
      },
    ]
  },

];
export default routerConfig;
