import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const comodos = [
    { title: 'Sala de Estar', description: 'Sala aconchegante e moderna.', image: '/logo.ico' },
    { title: 'Quarto', description: 'Quarto confortável e personalizado.', image: '/logo.ico' },
    { title: 'Cozinha', description: 'Cozinha funcional e elegante.', image: '/logo.ico' },
    { title: 'Banheiro', description: 'Banheiro sofisticado.', image: '/logo.ico' },
    { title: 'Escritório', description: 'Escritório produtivo.', image: '/logo.ico' },
  ];

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
          <h2 className="text-center mb-4">Nossos Cômodos</h2>
          <Carousel className='carousel carousel-dark slide'>
            {comodos.map((comodo, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {comodos.slice(index, index + 3).map((item, subIndex) => (
                    <Col md={4} key={subIndex} className="mb-4">
                      <div className="product-card text-center">
                        <img src={item.image} alt={item.title} className="img-fluid mb-3" />
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default Home;
