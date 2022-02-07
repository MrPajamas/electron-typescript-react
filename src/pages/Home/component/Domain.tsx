import { Grid, Input, Button, Icon, Checkbox, Table } from '@alifd/next';
import styles from './style.module.scss';
const { Col, Row } = Grid;
const Domain = () => {



  return (
    <>
      <Row align='center'>
        <Col fixedSpan={2}>监控：</Col>
        <Col>
          <Input
            hasClear
            trim
            placeholder="请输入"
            size="small"
            style={{ width: '100%', padding: '0 5px' }}
            addonAfter={
              <Button.Group size="small" style={{ display: 'flex' }}>
                <Button type="primary"><Icon type="search" /></Button>
                <Button type="primary"><Icon type="ashbin" /></Button>
              </Button.Group>
            } />
        </Col>
      </Row>
      <Row className={styles.pointsList}>
        <Checkbox.Group dataSource={getList()} />
      </Row>
      <Row>
        <Table dataSource={getTableData()} hasBorder={false} isZebra={true} tableLayout={'fixed'} fixedHeader={true} maxBodyHeight={300} className={styles.linkTable}>
          <Table.Column title="Type" dataIndex="Type" />
          <Table.Column title="Time" dataIndex="Time" />
          <Table.Column title="Name" dataIndex="Name" />
        </Table>
      </Row>
      <Row style={{ marginTop: '5px' }}>
        <Col>
          <Row style={{ padding: '5px' }} align='center'>
            <Col span={4}><span>Mock&nbsp;</span><Checkbox></Checkbox></Col>
            <Col>
              <Input
                hasClear
                trim
                placeholder="高级检索"
                size="small"
                style={{ width: '100%', padding: '0 5px' }}
                addonAfter={
                  <Button.Group size="small" style={{ display: 'flex' }}>
                    <Button type="primary"><Icon type="search" /></Button>
                    <Button type="primary"><Icon type="ashbin" /></Button>
                  </Button.Group>
                } />
            </Col>
            <Col span={5}>
              <Button.Group size="small" style={{ display: 'flex' }}>
                <Button type="primary"><Icon type="add" /></Button>
                <Button type="primary"><Icon type="minus" /></Button>
              </Button.Group>
            </Col>
          </Row>
          <Row className={styles.grouping}>
            <Button size='small' type="primary" >全部</Button>
            <Button size='small' type="normal" >未命名分组</Button>
            <Button size='small' type="primary" >+</Button>
          </Row>
          <Row>
            <Table dataSource={getTableData()} hasBorder={false} isZebra={true} tableLayout={'fixed'} fixedHeader={true} maxBodyHeight={300} className={styles.linkTable}>
              <Table.Column title="Type" dataIndex="Type" />
              <Table.Column title="Mock" dataIndex="Mock" />
              <Table.Column title="Name" dataIndex="Name" />
            </Table>
          </Row>
        </Col>
      </Row>
    </>
  )
}

function getTableData() {
  return [
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
    {
      Type: '23',
      Time: '123',
      Name: 'ajsldfj'
    },
  ]
}


function getList() {
  return [
    {
      value: 'RPC',
      label: 'RPC',
    },
    {
      value: 'mtop',
      label: 'mtop'
    },
    {
      value: 'http',
      label: 'http'
    },
    {
      value: 'Config',
      label: 'Config'
    },
    {
      value: '缓存',
      label: '缓存'
    },
    {
      value: '图片',
      label: '图片'
    },
    {
      value: '投放',
      label: '投放',
    },
    {
      value: 'Sync',
      label: 'Sync',
    },
    {
      value: 'JSAPI',
      label: 'JSAPI',
    },
    {
      value: '埋点',
      label: '埋点',
    },
    {
      value: 'StartApp',
      label: 'StartApp',
    },
    {
      value: '地理位置',
      label: '地理位置',
    },
    {
      value: 'RTS',
      label: 'RTS',
    },
    {
      value: 'JSConsole',
      label: 'JSConsole',
    },
    {
      value: '全选',
      label: '全选',
    }
  ]
}

export default Domain;
