import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterComponent() {
  return (
    <Container fluid className="mt-5 py-3 footer" style={{ backgroundColor: 'white' }}>
      <Row className="d-flex justify-content-between align-items-center">
        {/* Kiri - Logo dan Copyright */}
        <Col xs={6} className="text-start ps-5">
          <img src="/public/assets/img/logo.png" alt="Logo" style={{ height: '60px' }} />
          <p className="mt-2 mb-0">&copy; Copyright 2025</p>
        </Col>
        
        {/* Kanan - Nama dan Sosial Media */}
        <Col xs={6} className="text-end pe-5">
          <h3 className="mb-1">Eka Dwi Saputra</h3>
          <a href="https://api.whatsapp.com/send/?phone=6282246703900" target="_blank" className="me-3"><i className='bx bxl-whatsapp'></i></a>
          <a href="https://github.com/ekadwis" target="_blank" className="me-3"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/ekadwisaputra/" target="_blank"><i className='bx bxl-linkedin'></i></a>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
