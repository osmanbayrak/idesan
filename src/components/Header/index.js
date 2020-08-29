import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Col } from 'antd';
import './index.css';
import headerBg from '../../assets/bannerBgGray.png';
import logo from '../../assets/logo.jpg';

const { Header } = Layout;
const { SubMenu } = Menu;

class HeaderComponent extends React.Component {
  state = {
    opacityOn: false,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ opacityOn: true });
    } else if (this.state.opacityOn == true) {
      this.setState({ opacityOn: false });
    }
  };

  render() {
    const currentPath = window.location.pathname;
    const paths = [
      '/home',
      '/products/borular',
      '/products/profiller',
      '/products/haddedemirler',
      '/products/saclar',
      '/products/ferforje',
      '/contact',
    ];
    if (!paths.includes(currentPath)) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <Header style={this.state.opacityOn ? { opacity: '1' } : undefined} className="headerIndex">
          <Col md={{ span: 20, offset: 2 }}>
            <Col md={4} xs={6} className="logoDiv">
              <img
                onClick={() => {
                  this.props.history.push('/home');
                }}
                className="headerLogo"
                src={logo}
              />
            </Col>
            <Col md={12} xs={18} className="menuDiv" style={{ background: 'transparent' }}>
              <Menu
                mode="horizontal"
                selectedKeys={[paths.includes(currentPath) ? currentPath : '/home']}
                className="headerMenu"
              >
                <Menu.Item key="/home">
                  <Link to="/home" className="menuAtag">
                    ANASAYFA
                  </Link>
                </Menu.Item>
                <Menu.Item key="/products/profiller">
                  <Link to="/products/profiller" className="menuAtag">
                    ÜRÜN PORTFÖYÜ
                  </Link>
                </Menu.Item>
                <Menu.Item key="/contact">
                  <a
                    onClick={() => {
                      window.location = '/contact';
                    }}
                    className="menuAtag"
                  >
                    İLETİŞİM
                  </a>
                </Menu.Item>
              </Menu>
            </Col>
            <span className="mainSpan">
              <p className="pClass">
                <span className="span1">
                  <b>Tel:</b> 0232 237 2341
                </span>
                <span className="span2">0232 254 9535</span>
                <span style={{ display: 'block' }}>
                  <b>Email:</b>{' '}
                  <a
                    onClick={() => {
                      window.location.href = 'mailto:idesan@idesandemir.com';
                    }}
                  >
                    idesan@idesandemir.com
                  </a>
                </span>
              </p>
            </span>
          </Col>
        </Header>
      </div>
    );
  }
}

export default HeaderComponent;
