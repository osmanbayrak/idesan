import React from 'react';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import { Layout, BackTop } from 'antd';
import bgImg from './assets/bgrep.jpg';

const { Content } = Layout;

const GlobalLayout = props => (
  <Layout className="layout" style={{ backgroundImage: `url(${bgImg})` }}>
    <HeaderComponent />
    <BackTop />
    <Content>{props.children}</Content>
    <FooterComponent />
  </Layout>
);

export default GlobalLayout;
