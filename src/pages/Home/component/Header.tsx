import { Grid, Input, Button, Icon } from '@alifd/next';
const { Row, Col } = Grid;
import style from './style.module.scss'

const Header = () => {
  return (
    <>
      <Col span={8}>
        <Input
          hasClear
          trim
          placeholder="请输入"
          size="small"
          style={{ width: '100%', padding: '0 5px' }}
          addonAfter={<Button type='primary' size="small"><Icon type="refresh" /></Button>} />
      </Col>
      <Col span={10} className={style.col}>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
        <Button type="primary" size="small"><Icon type="atm" /></Button>
      </Col>
      <Col span={6}>
        <Input
          hasClear
          trim
          placeholder="请输入"
          size="small"
          style={{ width: '100%', padding: '0 5px' }}
          addonAfter={<Button type='primary' size="small"><Icon type="search" /></Button>} />
      </Col>
    </>
  )
}



export default Header;
