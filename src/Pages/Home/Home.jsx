import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import CatalogCard from '../../Components/Catalog/CatalogCard';
import logo from '../../assets/logo.ico';

const Home = () => {
  const comodos = [
    { title: 'Sala de Estar', description: 'Sala aconchegante e moderna.', image: logo },
    { title: 'Quarto', description: 'Quarto confortável e personalizado.', image: logo },
    { title: 'Cozinha', description: 'Cozinha funcional e elegante.', image: logo },
    { title: 'Banheiro', description: 'Banheiro sofisticado.', image: logo },
    { title: 'Escritório', description: 'Escritório produtivo.', image: logo },
    { title: 'Personalizado', description: 'Comodo personalizado', image: logo },
  ];

  const catalogItems = [
    { title: 'Mesa de Jantar', description: 'Mesa artesanal de madeira.', image: logo, room: 'Sala' },
    { title: 'Cadeira', description: 'Cadeira confortável.', image: logo, room: 'Sala' },
    { title: 'Sofá', description: 'Sofá aconchegante.', image: logo, room: 'Sala' },
    { title: 'Armário de Cozinha', description: 'Armário funcional.', image: logo, room: 'Cozinha' },
    { title: 'Mesa de Cozinha', description: 'Mesa prática para refeições.', image: logo, room: 'Cozinha' },
    { title: 'Cama', description: 'Cama confortável.', image: logo, room: 'Quarto' },
    { title: 'Guarda-Roupa', description: 'Guarda-roupa espaçoso.', image: logo, room: 'Quarto' },
    { title: 'Mesa de Cabeceira', description: 'Mesa prática.', image: logo, room: 'Quarto' },
  ];


  const shuffledCatalogItems = [...catalogItems].sort(() => Math.random() - 0.5);

  return (
    <div>
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col md={8} className="text-center text-white">
              <h1 className="display-4 fw-bold">Transforme sua casa com móveis sob medida</h1>
              <p className="lead">Trabalhamos com móveis personalizados para atender às suas necessidades.</p>
              <Button as={Link} to="/orcamento" variant="primary" size="lg" className="mt-3">
                Simular Orçamento
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="products-section py-5">
        <Container>
          <h2 className="text-center mb-4">Selecione um Cômodo para simular Orçamento</h2>
          <Row className="justify-content-center">
            {comodos.map((comodo, index) => (
              <Col xs={6} sm={4} md={2} key={index} className="mb-4">
                <div className="product-card text-center" style={{cursor: 'pointer'}} onClick={() => window.location.href = `/orcamento?room=${encodeURIComponent(comodo.title)}`}>
                  <img src={comodo.image} alt={comodo.title} className="img-fluid mb-3" />
                  <h6>{comodo.title}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="catalog-preview py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Nossos Produtos</h2>
          <Carousel className='carousel carousel-dark slide'>
            {Array.from({ length: Math.ceil(shuffledCatalogItems.length / 3) }, (_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="justify-content-center">
                  {shuffledCatalogItems.slice(slideIndex * 3, (slideIndex + 1) * 3).map((item, index) => (
                    <Col md={4} key={index} className="mb-4">
                      <CatalogCard {...item} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text-center mt-4">
            <Button as={Link} to="/catalogo" variant="primary" size="lg">
              Ver Catálogo Completo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
