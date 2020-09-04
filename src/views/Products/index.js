import React from 'react';
import { generatePath } from 'react-router';
import { Col, Row, Tabs, Divider, List, Carousel } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import productsBannerImg from '../../assets/productBanner.jpg';
import dkp from '../../assets/profiller/dkp.png';
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
import npu from '../../assets/haddeler/npu.png';
import cati from '../../assets/catimal.png';
import kilitler from '../../assets/under_constraction.png';
import menteşeler from '../../assets/under_constraction.png';
import tiner_boya from '../../assets/under_constraction.png';
import osebe from '../../assets/under_constraction.png';
import alcipan from '../../assets/under_constraction.png';
import mebran from '../../assets/under_constraction.png';
import kafes from '../../assets/under_constraction.png';
import elektrodlar from '../../assets/under_constraction.png';
import gazaltıteller from '../../assets/under_constraction.png';
import metalkesiciler from '../../assets/under_constraction.png';
import vidalar from '../../assets/under_constraction.png';
import heaheb from '../../assets/under_constraction.png';
import tdemir from '../../assets/under_constraction.png';
import boardex from '../../assets/under_constraction.png';
import betonpan from '../../assets/under_constraction.png';

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
      profiller_borular: {
        profillertext:
          'Profiller ERW (yüksek frekans kaynağı) teknolojisi ile dekape edilmiş yada soğuk haddelenmiş saçlardan üretilmektedir.Dış kesit çapı 10 mm’den 250 mm’ye kadar, et kalınlığı 0,7 mm’den  8 mm’ye kadar değişmektedir. İnşaat, otomotiv, mobilya, makine ve aksesuar sanayilerinde kullanılmaktadır. Standart profil uzunluğu 6 metredir. Özel uzunlukta profil siparişleriniz için lütfen bize ulaşın.',
        borulartext:
          'Borular ERW (yüksek frekans kaynağı) teknolojisi ile dekape edilmiş yada soğuk haddelenmiş saçlardan üretilmektedir. Dış çapları 12 mm’den 220 mm’ye kadar, et kalınlığı 0,7 mm’den 8 mm’ye kadar değişmiştir. İnşaat ve imalat sektöründe, seracılıkta, makine sanayinde, aksesuar üretiminde, mobilya sanayinde ve çelik konstrüksiyonun olduğu yerlerde kullanılmaktadır.',
        cards: [
          { name: 'Dörtköşe Profiller', image: dkp },
          { name: 'Galvaniz Profiller', image: gp },
          { name: 'İzli Profiller', image: ip },
          { name: 'Elips ve Oval Profiller', image: ep },
          { name: 'Sanayi Boruları', image: sboru },
          { name: 'Tesisat Boruları', image: dboru },
          { name: 'Galvaniz Borular', image: gboru },
        ],
      },
      saclar: {
        text:
          '0,35 mm’den 10 mm’e kadar saç çeşitlerimiz mevcuttur. İstenilen özel ebatlarda saç flanş kesimi, oluk kıvırma ve lazer kesim işlemleriniz yapılmaktadır.',
        cards: [
          { name: 'DKP Saclar', image: dkpsac },
          { name: 'Siyah Saclar', image: ssac },
          { name: 'Galvaniz Saclar', image: gsac },
          { name: 'Baklava Desenli Saclar', image: baklavasac },
          { name: 'Baskılı Saclar', image: baskisac },
          { name: 'Delikli Saclar', image: baklavasac },
        ],
      },
      cati: {
        text: '',
        cards: [
          { name: 'Trapez Saclar', image: cati },
          { name: 'Sandviç Paneller', image: cati },
          { name: 'Çatı Olukları', image: cati },
          { name: 'Şeffaf Işıklıklar', image: cati },
          { name: 'Çatı Çıkış Kapakları', image: cati },
        ],
      },
      hadde_demirler: {
        text: '',
        cards: [
          { name: 'NPU / NPI / IPE', image: npu },
          { name: 'HEA / HEB', image: heaheb },
          { name: 'Köşebent', image: kbent },
          { name: 'KARE / LAMA / SİLME', image: lama },
          { name: 'TE DEMİR', image: tdemir },
          { name: 'YUVARLAK / TRANSMİSYON', image: tdemir },
        ],
      },
      yapimalz: {
        text: '',
        cards: [
          { name: 'OSEBE', image: osebe },
          { name: 'Alçıpan', image: alcipan },
          { name: 'Boardex', image: boardex },
          { name: 'Betonpan', image: betonpan },
          { name: 'Mebran / Şıngıl', image: mebran },
          { name: 'Kafes Tel / Yeşil Çit', image: kafes },
        ],
      },
      yardimcilar: {
        text: '',
        cards: [
          { name: 'Elektrodlar', image: elektrodlar },
          { name: 'Gazaltı Teller', image: gazaltıteller },
          { name: 'Metal Kesiciler', image: metalkesiciler },
          { name: 'Vidalar', image: vidalar },
          { name: 'Kilitler', image: kilitler },
          { name: 'Menteşeler', image: menteşeler },
          { name: 'Tiner ve Boya', image: tiner_boya },
        ],
      },
    };

    return (
      <Col md={{ span: 24 }} xs={24} style={{ marginBottom: '40px' }}>
        <div className="bannerImg">
          <img style={{ width: '100%' }} src={productsBannerImg} />
        </div>
        <Col md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <Divider style={{ color: 'darkgray', height: '2px' }}>
            <h1>ÜRÜN PORTFÖYÜ</h1>
          </Divider>
          <Tabs
            defaultActiveKey={currentCategory ? currentCategory : 'profiller_borular'}
            onChange={this.callback}
            style={{
              textAlign: 'center',
              background: 'ghostwhite',
              borderRadius: '9px',
              paddingTop: '11px',
            }}
          >
            <Tabs.TabPane
              tab={<span style={{ fontSize: '14px' }}>PROFİLLER / BORULAR</span>}
              key="profiller_borular"
            >
              <Row>
                <Col
                  md={{ span: 18, offset: 3 }}
                  xs={{ span: 24, offset: 0 }}
                  className="aboutText"
                >
                  <p>{products.profiller_borular.profillertext}</p>
                  <p>{products.profiller_borular.borulartext}</p>
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.profiller_borular.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                    {products.profiller_borular.cards.map((v, i) => {
                      return (
                        <div>
                          <img style={{ height: '270px', width: '310px' }} src={v.image} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span style={{ fontSize: '14px' }}>SACLAR</span>} key="saclar">
              {products.saclar.text != '' ? (
                <Row>
                  <Col md={{ span: 18, offset: 3 }} xs={{ span: 24 }} className="aboutText">
                    {products.saclar.text}
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.saclar.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                    {products.saclar.cards.map((v, i) => {
                      return (
                        <div>
                          <img style={{ height: '270px', width: '310px' }} src={v.image} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span style={{ fontSize: '14px' }}>ÇATI MALZEMELERİ</span>}
              key="cati"
            >
              {products.cati.text != '' ? (
                <Row>
                  <Col md={{ span: 18, offset: 3 }} xs={{ span: 24 }} className="aboutText">
                    {products.cati.text}
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.cati.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                    {products.cati.cards.map((v, i) => {
                      return (
                        <div>
                          <img style={{ height: '270px', width: '310px' }} src={v.image} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span style={{ fontSize: '14px' }}>HADDELENMİŞ DEMİRLER</span>}
              key="haddedemirler"
            >
              {products.hadde_demirler.text != '' ? (
                <Row>
                  <Col md={{ span: 18, offset: 3 }} xs={{ span: 24 }} className="aboutText">
                    {products.hadde_demirler.text}
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.hadde_demirler.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                    {products.hadde_demirler.cards.map((v, i) => {
                      return (
                        <div>
                          <img style={{ height: '270px', width: '310px' }} src={v.image} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span style={{ fontSize: '14px' }}>YAPI MALZEMELERİ</span>}
              key="yapimalz"
            >
              {products.yapimalz.text != '' ? (
                <Row>
                  <Col md={{ span: 18, offset: 3 }} xs={{ span: 24 }} className="aboutText">
                    {products.yapimalz.text}
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.yapimalz.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                    {products.yapimalz.cards.map((v, i) => {
                      return (
                        <div>
                          <img style={{ height: '270px', width: '310px' }} src={v.image} />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span style={{ fontSize: '14px' }}>YARDIMCI ÜRÜNLER</span>}
              key="yardimcilar"
            >
              {products.yardimcilar.text != '' ? (
                <Row>
                  <Col md={{ span: 18, offset: 3 }} xs={{ span: 24 }} className="aboutText">
                    {products.yardimcilar.text}
                  </Col>
                </Row>
              ) : null}
              <Row style={{ marginTop: '20px' }} gutter={24}>
                <Col md={{ span: 9, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                  <List
                    dataSource={products.yardimcilar.cards}
                    renderItem={item => (
                      <List.Item style={{ textAlign: 'left', fontSize: '16px' }}>
                        <CaretRightFilled />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                  <Col md={{ span: 12, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                    <Carousel style={{ width: '310px', border: '1px solid lightgray' }} draggable>
                      {products.yardimcilar.cards.map((v, i) => {
                        return (
                          <div>
                            <img style={{ height: '270px', width: '310px' }} src={v.image} />
                          </div>
                        );
                      })}
                    </Carousel>
                  </Col>
                </Col>
              </Row>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Col>
    );
  }
}

export default Products;
