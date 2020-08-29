import React from 'react';
import { generatePath } from 'react-router';
import { Card, Col, Row, Tabs, Divider } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
import productsBannerImg from '../../assets/productBanner.jpg';
import dkp from '../../assets/profiller/dkp.png';
import op from '../../assets/profiller/op.png';
import ep from '../../assets/profiller/ep.png';
import gp from '../../assets/profiller/gp.png';
import ip from '../../assets/profiller/ip.png';
import sboru from '../../assets/borular/sboru.png';
import dboru from '../../assets/borular/dboru.png';
import gboru from '../../assets/borular/gboru.png';
import ssac from '../../assets/saclar/ssac.png';
import dkpsac from '../../assets/saclar/dkpsac.png';
import gsac from '../../assets/saclar/gsac.png';
import baskisac from '../../assets/saclar/baskisac.png';
import baklavasac from '../../assets/saclar/baklavasac.png';
import kbent from '../../assets/haddeler/kbent.png';
import lama from '../../assets/haddeler/lama.png';
import kd from '../../assets/haddeler/kd.png';
import npu from '../../assets/haddeler/npu.png';
import npi from '../../assets/haddeler/npi.png';
import dekorparca from '../../assets/ferforje/dekorparca.png';
import dekorpanel from '../../assets/ferforje/dekorpanel.png';
import kapiaks from '../../assets/ferforje/kapiaks.png';
import yaprak from '../../assets/ferforje/yaprak.png';
import mizrak from '../../assets/ferforje/mizrak.png';

class Products extends React.Component {
  state = {
    currentCategory: this.props.match.params.category,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.category != this.props.match.params.category) {
      this.setState({ currentCategory: this.props.match.params.category });
    }
  }

  callback = activeKey => {
    this.props.history.push({
      pathname: generatePath(this.props.match.path, { category: activeKey }),
    });
  };
  render() {
    const { currentCategory } = this.state;
    const products = {
      profiller: {
        text:
          'Profiller ERW (yüksek frekans kaynağı) teknolojisi ile dekape edilmiş yada soğuk haddelenmiş saçlardan üretilmektedir.Dış kesit çapı 10 mm’den 250 mm’ye kadar, et kalınlığı 0,7 mm’den  8 mm’ye kadar değişmektedir. İnşaat, otomotiv, mobilya, makine ve aksesuar sanayilerinde kullanılmaktadır. Standart profil uzunluğu 6 metredir. Özel uzunlukta profil siparişleriniz için lütfen bize ulaşın.',
        cards: [
          { name: 'Dörtköşe Profiller', image: dkp },
          { name: 'Oval Profiller', image: op },
          { name: 'Elips Profiller', image: ep },
          { name: 'Galvaniz Profiller', image: gp },
          { name: 'İzli Profiller', image: ip },
        ],
      },
      borular: {
        text:
          'Borular ERW (yüksek frekans kaynağı) teknolojisi ile dekape edilmiş yada soğuk haddelenmiş saçlardan üretilmektedir. Dış çapları 12 mm’den 220 mm’ye kadar, et kalınlığı 0,7 mm’den 8 mm’ye kadar değişmiştir. İnşaat ve imalat sektöründe, seracılıkta, makine sanayinde, aksesuar üretiminde, mobilya sanayinde ve çelik konstrüksiyonun olduğu yerlerde kullanılmaktadır.',
        cards: [
          { name: 'Sanayi Boruları', image: sboru },
          { name: 'Doğalgaz Boruları', image: dboru },
          { name: 'Galvaniz Borular', image: gboru },
        ],
      },
      saclar: {
        text:
          '0,35 mm’den 10 mm’e kadar saç çeşitlerimiz mevcuttur. İstenilen özel ebatlarda saç flanş kesimi, oluk kıvırma ve lazer kesim işlemleriniz yapılmaktadır.',
        cards: [
          { name: 'Siyah Sac', image: ssac },
          { name: 'DKP Sac', image: dkpsac },
          { name: 'Galvaniz Sac', image: gsac },
          { name: 'Baskılı Sac', image: baskisac },
          { name: 'Baklava Sac', image: baklavasac },
        ],
      },
      hadde_demirler: {
        text: '',
        cards: [
          { name: 'Köşebent', image: kbent },
          { name: 'Lama', image: lama },
          { name: 'Kare Demir', image: kd },
          { name: 'NPU', image: npu },
          { name: 'NPI', image: npi },
        ],
      },
      ferforje: {
        text: '',
        cards: [
          { name: 'Dekoratif Parçalar', image: dekorparca },
          { name: 'Dekoratif Paneller', image: dekorpanel },
          { name: 'Kapı Aksesuarları', image: kapiaks },
          { name: 'Yaprak ve C motifler', image: yaprak },
          { name: 'Mızraklar, Cumbalar', image: mizrak },
        ],
      },
    };

    return (
      <Col md={{ span: 24 }} xs={24}>
        <div className="bannerImg">
          <img style={{ width: '100%' }} src={productsBannerImg} />
        </div>
        <Col md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <Divider style={{ color: 'darkgray', height: '2px' }}>
            <h1>ÜRÜN PORTFÖYÜ</h1>
          </Divider>
          <Tabs
            defaultActiveKey={currentCategory ? currentCategory : 'profiller'}
            onChange={this.callback}
            style={{
              textAlign: 'center',
              background: 'ghostwhite',
              borderRadius: '9px',
              paddingTop: '11px',
            }}
          >
            <Tabs.TabPane tab={<span style={{ fontSize: '16px' }}>PROFİLLER</span>} key="profiller">
              <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }} className="aboutText">
                  {products.profiller.text}
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }} gutter={24}>
                {products.profiller.cards.map((v, i) => {
                  return (
                    <Col md={{ span: 6, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                      <Card
                        className="productCards"
                        bodyStyle={{ minHeight: '15px' }}
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        title={
                          <div
                            style={{
                              fontSize: '18px',
                              borderBottom: '1px solid white',
                              textAlign: 'center',
                              marginBottom: '10px',
                              paddingBottom: '8px',
                              color: 'white',
                            }}
                          >
                            {v.name}
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
                            <img className="rowImages" alt="example" src={v.image} />
                          </span>
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ fontSize: '16px' }}>BORULAR</span>} key="borular">
              <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }} className="aboutText">
                  {products.borular.text}
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }} gutter={24}>
                {products.borular.cards.map((v, i) => {
                  return (
                    <Col md={{ span: 8, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                      <Card
                        className="productCards"
                        bodyStyle={{ minHeight: '15px' }}
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        title={
                          <div
                            style={{
                              fontSize: '18px',
                              borderBottom: '1px solid white',
                              textAlign: 'center',
                              marginBottom: '10px',
                              paddingBottom: '8px',
                              color: 'white',
                            }}
                          >
                            {v.name}
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
                            <img
                              style={{ height: 260 }}
                              className="rowImages"
                              alt="example"
                              src={v.image}
                            />
                          </span>
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ fontSize: '16px' }}>SACLAR</span>} key="saclar">
              <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }} className="aboutText">
                  {products.saclar.text}
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }} gutter={24}>
                {products.saclar.cards.map((v, i) => {
                  return (
                    <Col md={{ span: 6, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                      <Card
                        className="productCards"
                        bodyStyle={{ minHeight: '15px' }}
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        title={
                          <div
                            style={{
                              fontSize: '18px',
                              borderBottom: '1px solid white',
                              textAlign: 'center',
                              marginBottom: '10px',
                              paddingBottom: '8px',
                              color: 'white',
                            }}
                          >
                            {v.name}
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
                            <img className="rowImages" alt="example" src={v.image} />
                          </span>
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span style={{ fontSize: '16px' }}>HADDE DEMİRLER</span>}
              key="haddedemirler"
            >
              <Row style={{ marginTop: '20px' }} gutter={24}>
                {products.hadde_demirler.cards.map((v, i) => {
                  return (
                    <Col md={{ span: 6, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                      <Card
                        className="productCards"
                        bodyStyle={{ minHeight: '15px' }}
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        title={
                          <div
                            style={{
                              fontSize: '18px',
                              borderBottom: '1px solid white',
                              textAlign: 'center',
                              marginBottom: '10px',
                              paddingBottom: '8px',
                              color: 'white',
                            }}
                          >
                            {v.name}
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
                            <img className="rowImages" alt="example" src={v.image} />
                          </span>
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ fontSize: '16px' }}>FERFORJE</span>} key="ferforje">
              <Row style={{ marginTop: '20px' }} gutter={24}>
                {products.ferforje.cards.map((v, i) => {
                  return (
                    <Col md={{ span: 6, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                      <Card
                        className="productCards"
                        bodyStyle={{ minHeight: '15px' }}
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        title={
                          <div
                            style={{
                              fontSize: '18px',
                              borderBottom: '1px solid white',
                              textAlign: 'center',
                              marginBottom: '10px',
                              paddingBottom: '8px',
                              color: 'white',
                            }}
                          >
                            {v.name}
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
                            <img className="rowImages" alt="example" src={v.image} />
                          </span>
                        }
                      />
                    </Col>
                  );
                })}
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Col>
    );
  }
}

export default Products;
