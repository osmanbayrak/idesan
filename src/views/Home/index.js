import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Col, Row, Icon, Divider } from 'antd';
import first from '../../assets/slayt1.jpg';
import second from '../../assets/slayt2.jpg';
import third from '../../assets/slayt3.jpg';
import profillerPng from '../../assets/profillerPng.png';
import haddedemirlerPng from '../../assets/haddedemirlerPng.png';
import saclarPng from '../../assets/saclarPng.png';
import borularPng from '../../assets/borularPng.png';
import ferforjelerPng from '../../assets/ferforjelerPng.png';
import headerBg from '../../assets/bannerBgGray.png';
import cayirova from '../../assets/cayirova.png';
import fatih from '../../assets/fatih.jpg';
import oerlikon from '../../assets/oerlikon.png';
import yucelboru from '../../assets/yücelboru.jpg';
import noksel from '../../assets/noksel.jpg';
import bayiler from '../../assets/bayiler.jpeg';

class HomePage extends React.Component {
  render() {
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
      style: { marginBottom: 24 },
    };
    return (
      <div>
        <Col md={{span: 20, offset: 2}} xs={{span: 24}} className="carouselDiv">
          <Carousel style={{paddingLeft: '60px', paddingRight: '60px'}} autoplay draggable={true}>
            <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={first} />
            </div>
            <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={second} />
            </div>
            <div>
              <img className="carouselImg" style={{ height: 'auto', width: '100%' }} src={third} />
            </div>
          </Carousel>
        </Col>
        <Row className="titleRow">
          <Col span={10} className="titleRowDivider" />
            <Col span={4} className="titleMiddleDiv">
              <span>Kısaca İDESAN</span>
            </Col>
          <Col span={10} className="titleRowDivider" />
          <Col md={{span: 18, offset: 3}} xs={{span: 24}} className="aboutText">
            <ul style={{textAlign: 'left'}}>
              <li>Firmamız İdesan Demir 1984 yılında İzmir Karabağlar Sanayi Bölgesinde demir ticaretine başlamıştır.</li>
              <li>Yıllar içinde ilkeli ticaret anlayışı, kaliteli ürün portföyü ve hizmet kalitesiyle büyümüştür.</li>
              <li>Bugün Karabağlar ve Gaziemir’deki depoları, artan ürün gamı ve müşterisine sunduğu lojistik kolaylıklarla hizmet vermeye devam etmektedir.</li>
            </ul>
          </Col>
        </Row>
        <Row className="titleRow" style={{marginTop: '20px'}}>
          <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv">
            <span>ÜRÜNLER</span>
          </Col>
          <Col span={10} className="titleRowDivider" />
        </Row>
        <div className="pageContent">
          <Row gutter={24}>
            <Col md={{offset: 2, span: 20}} xs={{offset: 4, span: 16}}>
            <Link to="/products/profiller">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  style={{ backgroundImage: `url(${headerBg})` }}
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  title={
                    <div
                      style={{
                        fontSize: '18px',
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
                    <span style={{ overflow: 'hidden', textAlign: 'center', border: '2px solid gray', borderRadius: '7px' }}>
                      <img
                        className="rowImages"
                        style={{ marginLeft: '-15px' }}
                        alt="example"
                        src={profillerPng}
                      />
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
                        fontSize: '18px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Hadde Demirler
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', textAlign: 'center', border: '2px solid gray', borderRadius: '7px' }}>
                      <img
                        className="rowImages"
                        style={{ marginLeft: '-95px' }}
                        alt="example"
                        src={haddedemirlerPng}
                      />
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
                        fontSize: '18px',
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
                    <span style={{ overflow: 'hidden', textAlign: 'center', border: '2px solid gray', borderRadius: '7px' }}>
                      <img
                        style={{ marginLeft: '-120px' }}
                        className="rowImages"
                        alt="example"
                        src={saclarPng}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
            <Link to="/products/borular">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '18px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Borular
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', textAlign: 'center', border: '2px solid gray', borderRadius: '7px' }}>
                      <img
                        style={{ marginLeft: '-85px' }}
                        className="rowImages"
                        alt="example"
                        src={borularPng}
                      />
                    </span>
                  }
                />
              </Col>
            </Link>
            {/* <Link to="/products/ferforje">
              <Col {...topColResponsiveProps} style={{ cursor: 'pointer' }}>
                <Card
                  bodyStyle={{ minHeight: '15px' }}
                  className="productCards"
                  style={{ borderRadius: '10px', backgroundImage: `url(${headerBg})` }}
                  title={
                    <div
                      style={{
                        fontSize: '18px',
                        borderBottom: '1px solid white',
                        textAlign: 'center',
                        marginBottom: '10px',
                        paddingBottom: '8px',
                        color: 'aliceblue',
                      }}
                    >
                      Ferforje
                    </div>
                  }
                  cover={
                    <span style={{ overflow: 'hidden', textAlign: 'center', border: '2px solid gray', borderRadius: '7px' }}>
                      <img
                        style={{ marginLeft: '-85px' }}
                        className="rowImages"
                        alt="example"
                        src={ferforjelerPng}
                      />
                    </span>
                  }
                />
              </Col>
            </Link> */}
            </Col>
            <Divider style={{background: 'rgba(0,0,0,0.4)', marginTop: '20px'}} />
            <Col md={{span: 20, offset: 2}} xs={{span: 24}} style={{marginTop: '25px', marginBottom: '10px'}}>
              <div style={{textAlign: 'center', fontSize: '22px', marginBottom: '15px', fontWeight: 'bolder'}}>Bayisi olduğumuz bazı üreticiler...</div>
              <div style={{background: 'white', borderRadius: '8px', textAlign: 'center', height: '75px', marginBottom: '40px'}}>
                <img className="bayilerImg" src={bayiler} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
