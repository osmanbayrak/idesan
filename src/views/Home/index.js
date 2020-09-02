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
import MomentumSlider from 'momentum-slider';

class HomePage extends React.Component {
  componentDidMount() {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 3],
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Gaziemir Depo',
        'Gaziemir Ofis',
        'Karabağlar Depo'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 2],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 2],
        vertical: true,
        interactive: false
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 2],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

  }

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
        <main class="sliders-container">
          <ul class="pagination">
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
              <li class="pagination__item"><a class="pagination__button"></a></li>
          </ul>
      </main>
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
