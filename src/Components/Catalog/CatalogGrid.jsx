import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CatalogCard from './CatalogCard';
import './CatalogGrid.css';
import logo from '../../assets/logo.ico';

const CatalogGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    { title: 'Mesa de Jantar', description: 'Mesa artesanal de madeira.', image: logo, room: 'Sala' },
    { title: 'Cadeira', description: 'Cadeira confortável.', image: logo, room: 'Sala' },
    { title: 'Sofá', description: 'Sofá aconchegante.', image: logo, room: 'Sala' },
    { title: 'Armário de Cozinha', description: 'Armário funcional.', image: logo, room: 'Cozinha' },
    { title: 'Mesa de Cozinha', description: 'Mesa prática para refeições.', image: logo, room: 'Cozinha' },
    { title: 'Cama', description: 'Cama confortável.', image: logo, room: 'Quarto' },
    { title: 'Guarda-Roupa', description: 'Guarda-roupa espaçoso.', image: logo, room: 'Quarto' },
    { title: 'Mesa de Cabeceira', description: 'Mesa prática.', image: logo, room: 'Quarto' },
  ];

  const rooms = [...new Set(items.map(item => item.room))];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const groupedItems = rooms.reduce((acc, room) => {
    acc[room] = filteredItems.filter(item => item.room === room);
    return acc;
  }, {});

  return (
    <Container>
      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button variant="secondary" onClick={() => setSearchTerm('')} className="w-100">Limpar Busca</Button>
        </Col>
      </Row>
      {rooms.map(room => (
        groupedItems[room].length > 0 && (
          <div key={room} className="room-section mb-5">
            <h3 className="room-title">{room}</h3>
            <Row>
              {groupedItems[room].map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <CatalogCard {...item} />
                </Col>
              ))}
            </Row>
          </div>
        )
      ))}
    </Container>
  );
};

export default CatalogGrid;
