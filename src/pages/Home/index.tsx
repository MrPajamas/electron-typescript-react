import { Grid, Input, Button, Icon } from '@alifd/next';
const { Row, Col } = Grid;
import './index.module.scss'
import Header from './component/Header'
import Domain from './component/Domain'
import CodeArea from './component/CodeArea'
const Home = () => {

  return (
    <>
      <Row style={{ height: '30px' }} align='center'>
        <Header />
      </Row>
      <Row style={{ height: 'calc(100vh - 30px)', overflowY: 'hidden' }}>
        <Col xxs={10} l={8} style={{ height: '100%', overflowY: 'auto' }} >
          <Domain />
        </Col>
        <Col xxs={14} l={16}>
          <CodeArea />
        </Col>
      </Row>
    </>
  );
}

export default Home;
