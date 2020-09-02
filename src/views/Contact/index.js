import React from 'react';
import { Card, Col, Row, Tabs, Divider } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
import karabaglarImg from '../../assets/slayt3.jpg';
import gaziemirImg from '../../assets/slayt2.jpg';
import contactsBannerImg from '../../assets/contactBannerImg.jpg';

class Contact extends React.Component {
  render() {
    return (
      <Col md={{ span: 24 }} xs={24}>
        <div className="bannerImg">
          <img
            style={{ width: '100%', borderBottom: '1px solid darkgray' }}
            src={contactsBannerImg}
          />
        </div>
        <Col
          md={{ span: 22, offset: 1 }}
          xs={{ span: 24, offset: 0 }}
          style={{ marginBottom: '15px' }}
        >
          <Divider style={{ color: 'darkgray', height: '2px' }}>
            <h1>İLETİŞİM</h1>
          </Divider>
          <Col xs={{ span: 22, offset: 1 }} md={{ span: 11, offset: 0 }} className="karabaglarDiv">
            <Divider>
              <h2>Karabağlar Depo</h2>
            </Divider>
            <div style={{ color: 'black' }}>
              <p>Adres : 5733 sok. No:39 Karabağlar/İzmir</p>
              <p>
                Telefon : <a href="tel:+902322372341">0232 237 2341</a>
              </p>
              <p>Faks : 0232 254 1541</p>
              <p>
                Email :{' '}
                <a
                  onClick={() => {
                    window.location.href = 'mailto:idesan@idesandemir.com';
                  }}
                >
                  idesan@idesandemir.com
                </a>
              </p>
              <img className="contactLittleImg" src={karabaglarImg} />
            </div>
            <div id="karabaglarMap" className="map" />
          </Col>
          <Col md={{ span: 1 }} xs={{ span: 24 }}>
            {' '}
          </Col>
          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 11, offset: 0 }}
            style={{
              textAlign: 'center',
              background: 'ghostwhite',
              borderRadius: '8px',
              paddingTop: '15px',
              paddingBottom: '20px',
            }}
          >
            <Divider>
              <h2>Gaziemir Depo</h2>
            </Divider>
            <div style={{ color: 'black' }}>
              <p>Adres : 907 Sokak No:6 Gaziemir/İzmir</p>
              <p>
                Telefon : <a href="tel:+905413693877">0541 369 3877</a>
              </p>
              <p>Faks : 0232 254 1541</p>
              <p>
                Email :{' '}
                <a
                  onClick={() => {
                    window.location.href = 'mailto:idesan@idesandemir.com';
                  }}
                >
                  idesan@idesandemir.com
                </a>
              </p>
              <img className="contactLittleImg" src={gaziemirImg} />
            </div>
            <div id="gaziemirMap" className="map" />
          </Col>
        </Col>
      </Col>
    );
  }
}

export default Contact;
