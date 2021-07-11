import React from 'react';
import { Row, Col } from 'antd';
import { UsersTable } from './component/UserTable';

function App() {
  return (
    <Row justify='center' align='middle' style={{ height: '600px' }}>
      <Col span={12}>
        <UsersTable />
      </Col>
    </Row>
  );
}

export default App;
