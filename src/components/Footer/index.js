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
  <Footer className="footerClass">
    <Fragment>
      <Row style={{ color: '#fff', marginTop: '20px' }}>
        <Col md={{ span: 22, offset: 1 }} xs={{ span: 24, offset: 0 }}>
          <Col md={{ span: 6, offset: 6 }} xs={{ span: 24, offset: 0 }}>
            <span style={{ display: 'block' }}>5733 Sok. No:39 35380 Karabağlar / İzmir</span>
            <span style={{ display: 'block' }}>
              E-mail:{' '}
              <a
                onClick={() => {
                  window.location.href = 'mailto:idesan@idesandemir.com';
                }}
              >
                idesan@idesandemir.com
              </a>
            </span>
          </Col>
          <Col md={{ span: 6 }} xs={24}>
            <span style={{ display: 'block' }}>Faks: 0232 254 1541</span>
            <span style={{ display: 'block' }}>Tel: 0232 237 2341 / 0232 254 9535</span>
          </Col>
        </Col>
      </Row>
      <Divider style={{ margin: '12px 0', background: 'gray' }} />
      <Col style={{ textAlign: 'center', color: '#fff', fontSize: '13px' }}>
        Copyright © 2020 İDESAN Tüm hakları saklıdır.
      </Col>
    </Fragment>
  </Footer>
);

export default FooterComponent;
