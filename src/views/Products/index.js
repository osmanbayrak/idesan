import React from 'react';
import { Card, Col, Row, Icon, List } from 'antd';
import headerBg from '../../assets/bannerBgGray.png';
import productsBannerImg from '../../assets/productBanner.jpg';

class Products extends React.Component {
  state = {
    currentCategory: this.props.match.params.category,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.category != this.props.match.params.category) {
      this.setState({ currentCategory: this.props.match.params.category });
    }
  }
  render() {
    const { currentCategory } = this.state;
    const products = {
      profiller: {
        text: "Profiller ERW (yüksek frekans kaynağı) teknolojisi ile dekape edilmiş yada soğuk haddelenmiş saçlardan üretilmektedir.Dış kesit çapı 10 mm’den 250 mm’ye kadar, et kalınlığı 0,7 mm’den  8 mm’ye kadar değişmektedir. İnşaat, otomotiv, mobilya, makine ve aksesuar sanayilerinde kullanılmaktadır. Standart profil uzunluğu 6 metredir. Özel uzunlukta profil siparişleriniz için lütfen bize ulaşın.", 
        cards: [
          {name: 'Dörtköşe Profiller', image: dkp},
          {name: 'Oval Profiller', image: op},
          {name: 'Elips Profiller', image: ep},
          {name: 'Galvaniz Profiller', image: gp},
          {name: 'İzli Profiller', image: ip}
        ]
      },
      borular: {
        text: '',
        cards: []
      },
      saclar: {
        text: '',
        cards: []
      },
      hadde_demirler: {
        text: '',
        cards: []
      },
      ferforje: {
        text: '',
        cards: []
      }
    }

    return (
      <Col md={{span: 24}} xs={24}>
        <div className="bannerImg">
          <img style={{width: '100%'}} src={productsBannerImg}  />
        </div>
        <Col span={10} className="titleRowDivider" />
          <Col span={4} className="titleMiddleDiv" style={{textAlign: 'center'}}>
            <span>Ürün Portföyü</span>
          </Col>
        <Col span={10} className="titleRowDivider" />
        <Col>
        <Tabs defaultActiveKey={this.state.product} tabPosition="left" onChange={this.callback}>

        </Tabs>
        </Col>
      </Col>
    );
  }
}

export default Products;
