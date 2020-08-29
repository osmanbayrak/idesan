// @ts-check
import React from 'react';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Row type="flex" justify="center" align="top" className="Layout marT20 text-center">
    <Col className="white">
      <h1 className="text-center not-found">Ooooppppssss...!!!</h1>
      <div className="not-found-under-title">
        I think, You are lost. Keep calm and back to
        <div className="clearfix" />
        <Button type="primary" className="marT40">
          <Link to="/home">Home page</Link>
        </Button>
      </div>
    </Col>
  </Row>
);

export default NotFound;
