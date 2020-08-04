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
      '/products/all',
      '/iletişim',
    ];
    if (!paths.includes(currentPath)) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
      <Header style={this.state.opacityOn ? { opacity: '1' } : undefined} className="headerIndex">
        <Col md={4} xs={6} className="logoDiv">
          <img className="headerLogo" src={logo} />
        </Col>
        <Col md={12} xs={18} className="menuDiv" style={{ background: 'transparent' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[paths.includes(currentPath) ? currentPath : '/home']}
            className="headerMenu"
          >
            <Menu.Item key="/home">
              <Link to="/home"className="menuAtag">
                ANASAYA
              </Link>
            </Menu.Item>
            <Menu.Item key="/products/all">
              <Link to="/products/all" className="menuAtag">
                ÜRÜN PORTFÖYÜ
              </Link>
            </Menu.Item>
            <Menu.Item key="/contact">
              <Link to="/contact" className="menuAtag">
                İLETİŞİM
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col style={{marginTop: '-10px'}} xs={0} md={8}>
            <p style={{height: '5px', marginBottom: '7px'}}>Karabağlar tel: 0232 237 2341</p>
            <p style={{height: '5px', marginBottom: '7px'}}>Gaziemir tel : 0532 630 6840 </p>
            <p style={{height: '5px', marginBottom: '0px'}}>Email : <a onClick={() => { window.location.href = "mailto:mail@example.org"; }}>idesan@idesandemir.com</a></p>
        </Col>
      </Header>
      </div>
    );
  }
}

export default HeaderComponent;
