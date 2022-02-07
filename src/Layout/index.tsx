import { Nav, Shell } from '@alifd/next';
import { useNavigate } from 'react-router-dom'

const Layout = ({ children, routerConfig }: any) => {

  const navigate = useNavigate();

  return (
    <Shell className={"iframe-hack"} fixedHeader={true} type="dark">
      <Shell.Navigation trigger={null} fixed={true} collapse={true} >
        <Nav embeddable onSelect={(selectedKeys) => navigate(selectedKeys[0])} defaultSelectedKeys={['/']}>
          {routerConfig[0].children.map((item: { path: string }) => (
            <Nav.Item icon="account" key={item.path} ></Nav.Item>
          ))}
        </Nav>
      </Shell.Navigation>
      <Shell.Content style={{ padding: 0}}>
        {children()}
      </Shell.Content>
    </Shell>
  )
}


export default Layout;
