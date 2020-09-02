import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Col, Row, Icon, Divider } from 'antd';
import first from '../../assets/slayt1.jpg';
import second from '../../assets/slayt2.jpg';
import third from '../../assets/slayt3.jpg';
import fourth from '../../assets/slayt4.jpg';
import profillerBorularPng from '../../assets/profillerBorularPng.png';
import haddedemirlerPng from '../../assets/haddedemirlerPng.png';
import saclarPng from '../../assets/saclarPng.png';
import yardimcilarPng from '../../assets/yardimcilarPng.png';
import yapiMalzPng from '../../assets/yapiMalzPng.png';
import headerBg from '../../assets/bannerBgGray.png';
import bayiler from '../../assets/bayiler.jpeg';
import catimal from '../../assets/catimal.png';

class HomePage extends React.Component {
  render() {
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 4,
      lg: 4,
      xl: 4,
      style: { marginBottom: 24 },
    };
    return (
      <div>
        <Col md={{ span: 20, offset: 2 }} xs={{ span: 24 }} className="carouselDiv">
          <Carousel autoplay draggable={true}>
            {/* <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={first} />
            </div> */}
            <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={second} />
            </div>
            {/* <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={third} />
            </div> */}
            <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={fourth} />
            </div>
          </Carousel>
        </Col>
        <Divider style={{ background: 'darkgray', height: '2px' }} />
        <Row className="titleRow">
          <Col md={{ span: 20, offset: 2 }} xs={{ span: 24 }} className="aboutText">
            <Divider style={{ color: 'darkgray', height: '2px' }} orientation="left">
              <h1>Kısaca İDESAN</h1>
            </Divider>
            <ul style={{ textAlign: 'left', fontWeight: 'normal', color: 'rgba(0,0,0,0.9)' }}>
              <li>
                İdesan Demir 1984 yılında İzmir Karabağlar Sanayi Bölgesinde demir ticaretine
                başlamıştır.
              </li>
              <li>
                Yıllar içinde ilkeli ticaret anlayışı, kaliteli ürün portföyü ve hizmet kalitesiyle
                büyümüştür.
              </li>
              <li>
                Bugün Karabağlar ve Gaziemir’deki depoları, artan ürün gamı ve müşterisine sunduğu
                lojistik kolaylıklarla hizmet vermeye devam etmektedir.
              </li>
            </ul>
          </Col>
        </Row>
        <Divider style={{ background: 'darkgray', height: '2px' }} />
        <Row gutter={12} style={{ marginRight: '0px' }}>
          <Col
            className="contentBlock"
            style={{ background: 'white', marginBottom: '30px' }}
            md={{ offset: 2, span: 20 }}
            xs={{ offset: 2, span: 20 }}
          >
            <Divider orientation="center">
              <h1>ÜRÜNLER</h1>
            </Divider>
            <Link to="/products/profiller_borular">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  style={{ backgroundImage: `url(${headerBg})` }}
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Profiller
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={profillerBorularPng} />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/saclar">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Saclar
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={saclarPng} />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/cati">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Çatı Malzemeleri
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={catimal} />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/haddedemirler">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Haddelenmiş Demirler
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={haddedemirlerPng} />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/yapimalz">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Yapı Malzemeleri
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={yapiMalzPng} />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/yardimcilar">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '16px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Yardımcı Ürünler
                    </div>
                  }
                  cover={
                    <span
                      style={{
                        overflow: 'hidden',
                        textAlign: 'center',
                        border: '2px solid gray',
                        borderRadius: '7px',
                      }}
                    >
                      <img className="rowImages" alt="example" src={yardimcilarPng} />
                    </span>
                  }
                />
              </Col>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
