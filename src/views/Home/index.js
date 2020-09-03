import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Divider } from 'antd';
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
import catimal from '../../assets/catimal.png';
import noksel from '../../assets/noksel3.jpg';
import cayirova from '../../assets/cayirova.png';
import oerlikon from '../../assets/oerlikon.png';
import yücelboru from '../../assets/yücelboru2.jpg';
import fatih from '../../assets/fatih.jpg';
import $ from 'jquery';

class HomePage extends React.Component {
  state = {};
  componentDidMount() {
    let activeIndex = 0;
    let limit = 0;
    let disabled = false;
    let $stage;
    let $controls;

    const SPIN_FORWARD_CLASS = 'js-spin-fwd';
    const SPIN_BACKWARD_CLASS = 'js-spin-bwd';
    const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled';
    const SPIN_DUR = 1000;

    const appendControls = () => {
      for (let i = 0; i < limit; i++) {
        $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`);
      }
      let height = $('.carousel__control')
        .children()
        .last()
        .outerHeight();

      $('.carousel__control').css('height', 30 + limit * height);
      $controls = $('.carousel__control').children();
      $controls.eq(activeIndex).addClass('active');
    };

    const setIndexes = () => {
      $('.spinner')
        .children()
        .each((i, el) => {
          $(el).attr('data-index', i);
          limit++;
        });
    };
    const prepareDom = () => {
      setIndexes();
      appendControls();
    };

    const spin = (inc = 1) => {
      if (disabled) return;
      if (!inc) return;
      activeIndex += inc;
      disabled = true;

      if (activeIndex >= limit) {
        activeIndex = 0;
      }

      if (activeIndex < 0) {
        activeIndex = limit - 1;
      }

      const $activeEls = $('.spinner__face.js-active');
      const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
      $nextEls.addClass('js-next');

      if (inc > 0) {
        $stage.addClass(SPIN_FORWARD_CLASS);
      } else {
        $stage.addClass(SPIN_BACKWARD_CLASS);
      }

      $controls.removeClass('active');
      $controls.eq(activeIndex).addClass('active');

      setTimeout(
        () => {
          spinCallback(inc);
        },
        SPIN_DUR,
        inc,
      );
    };

    const spinCallback = inc => {
      $('.js-active').removeClass('js-active');
      $('.js-next')
        .removeClass('js-next')
        .addClass('js-active');
      $stage
        .addClass(DISABLE_TRANSITIONS_CLASS)
        .removeClass(SPIN_FORWARD_CLASS)
        .removeClass(SPIN_BACKWARD_CLASS);

      $('.js-active').each((i, el) => {
        const $el = $(el);
        $el.prependTo($el.parent());
      });
      setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
        disabled = false;
      }, 100);
    };

    $('.carousel').on('click', e => {
      e.preventDefault();
      spin();
    });

    const attachListeners = () => {
      document.onkeyup = e => {
        switch (e.keyCode) {
          case 38:
            spin(-1);
            break;
          case 40:
            spin(1);
            break;
        }
      };

      $controls.on('click', e => {
        e.preventDefault();
        if (disabled) return;
        const $el = $(e.target);
        const toIndex = parseInt($el.attr('data-index'), 10);
        spin(toIndex - activeIndex);
      });
    };

    const assignEls = () => {
      $stage = $('.carousel__stage');
    };

    const init = () => {
      assignEls();
      prepareDom();
      attachListeners();
    };

    $(() => {
      init();
    });
    let intervalId = setInterval(spin, 4500);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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
          <div className="carousel">
            <div className="carousel__control" />
            <div className="carousel__stage">
              <div className="spinner spinner--left">
                <div className="spinner__face js-active" data-bg="#27323c">
                  <div className="content" data-type="iceland">
                    <img style={{ width: '100%' }} src={second} />
                  </div>
                </div>
                <div className="spinner__face" data-bg="#19304a">
                  <div className="content" data-type="china">
                    <img style={{ width: '100%' }} src={fourth} />
                  </div>
                </div>
                <div className="spinner__face" data-bg="#2b2533">
                  <div className="content" data-type="usa">
                    <img style={{ width: '100%' }} src={third} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <Divider style={{ background: 'darkgray', height: '2px' }} />
        <Row gutter={12} style={{ marginRight: '0px' }}>
          <Col
            className="contentBlock"
            style={{ background: 'white', marginBottom: '30px', paddingBottom: '5px' }}
            md={{ offset: 2, span: 20 }}
            xs={{ offset: 2, span: 20 }}
          >
            <Divider style={{ margin: '2px 0' }} orientation="left">
              <h4>Bayisi Olduğumuz Bazı Firmalar...</h4>
            </Divider>
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={yücelboru} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={noksel} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={fatih} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={cayirova} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={oerlikon} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={yücelboru} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={noksel} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={fatih} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={cayirova} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={oerlikon} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={yücelboru} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={noksel} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={fatih} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                  <img src={cayirova} height="100" width="250" alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
