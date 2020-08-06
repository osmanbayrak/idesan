import './index.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Divider, Row, Icon } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
const { Footer } = Layout;

const i18n = {
  t: param => {
    return param;
  },
};

const FooterComponent = () => (
  <Footer style={{ textAlign: 'center', backgroundColor: '#333333', padding: '5px 50px 20px' }}>
    <Fragment>
      <Row style={{ color: '#fff', marginTop: '20px' }}>
        <Col md={{span: 22, offset: 1}} xs={{span: 24}}>
          <Col md={{span: 6}} xs={24}>5733 Sok. No:39 35380 Karabağlar / İzmir</Col>
          <Col md={{span: 6}} xs={24}>Tel: 0232 237 2341 / 0232 254 9535</Col>
          <Col md={{span: 6}} xs={24}>Faks: 0232 254 1541 </Col>
          <Col md={{span: 6}} xs={24}>E-mail: <a onClick={() => { window.location.href = "mailto:mail@example.org"; }}>idesan@idesandemir.com</a></Col>
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0', background: 'gray' }} />
      <Col style={{textAlign: 'center', color: '#fff'}}>
        Copyright © 2020 İDESAN Tüm hakları saklıdır.
      </Col>
    </Fragment>
  </Footer>
);

export default FooterComponent;
