import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CatalogGrid from '../../Components/Catalog/CatalogGrid.jsx';
import './Catalogo.css';

const Catalogo = () => {
  return (
    <Container className="nav-padd">
      <div className="catalog-header text-center mb-5">
        <h1>Bem-vindo ao Catálogo</h1>
        <p>Explore nossos produtos de madeira artesanal.</p>
      </div>
      <CatalogGrid />
    </Container>
  );
};

export default Catalogo;
