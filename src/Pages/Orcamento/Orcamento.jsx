import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import FormOrcamento from '../../Components/Orcamento/FormOrcamento';
import './Orcamento.css';

const Orcamento = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFurniture, setSelectedFurniture] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const rooms = ['Sala de Estar', 'Quarto', 'Cozinha', 'Banheiro', 'Escritório'];
  const furnitureOptions = {
    'Sala de Estar': ['Sofá', 'Mesa de Centro', 'Estante', 'Poltrona'],
    'Quarto': ['Cama', 'Guarda-Roupa', 'Mesa de Cabeceira', 'Cômoda'],
    'Cozinha': ['Armário', 'Mesa', 'Balcão', 'Prateleiras'],
    'Banheiro': ['Armário de Banheiro', 'Espelho', 'Prateleira'],
    'Escritório': ['Mesa de Escritório', 'Cadeira', 'Estante', 'Armário de Arquivo']
  };
  const materialOptions = ['MDF 0.5cm', 'MDF 1cm', 'Madeira Maciça', 'Tinta Azul', 'Tinta Branca', 'Verniz', 'Couro'];

  useEffect(() => {
    const room = searchParams.get('room');
    if (room) {
      setSelectedRoom(room);
      setStep(2); // Skip to furniture selection if room is pre-selected
    }
  }, [searchParams]);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setStep(2);
  };

  const handleFurnitureToggle = (item) => {
    setSelectedFurniture(prev =>
      prev.includes(item) ? prev.filter(f => f !== item) : [...prev, item]
    );
  };

  const handleMaterialToggle = (item) => {
    setSelectedMaterials(prev =>
      prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
    );
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Container className="orcamento-container nav-padd">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Solicitar Orçamento</h1>
          <div className="step-indicator text-center mb-4">
            <span className={step >= 1 ? 'active' : ''}>1. Cômodo</span> →
            <span className={step >= 2 ? 'active' : ''}>2. Móveis</span> →
            <span className={step >= 3 ? 'active' : ''}>3. Materiais</span> →
            <span className={step >= 4 ? 'active' : ''}>4. Detalhes</span>
          </div>

          {step === 1 && (
            <div>
              <h3>Escolha o Cômodo</h3>
              <Row>
                {rooms.map(room => (
                  <Col md={4} key={room} className="mb-3">
                    <Card className={`cursor-pointer ${selectedRoom === room ? 'border-primary' : ''}`} onClick={() => handleRoomSelect(room)}>
                      <Card.Body className="text-center">
                        <Card.Title>{room}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Escolha os Móveis para {selectedRoom}</h3>
              <Row>
                {furnitureOptions[selectedRoom]?.map(item => (
                  <Col md={6} key={item} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label={item}
                      checked={selectedFurniture.includes(item)}
                      onChange={() => handleFurnitureToggle(item)}
                    />
                  </Col>
                ))}
              </Row>
              <Button onClick={nextStep} disabled={selectedFurniture.length === 0}>Próximo</Button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3>Escolha os Materiais</h3>
              <Row>
                {materialOptions.map(material => (
                  <Col md={6} key={material} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label={material}
                      checked={selectedMaterials.includes(material)}
                      onChange={() => handleMaterialToggle(material)}
                    />
                  </Col>
                ))}
              </Row>
              <Button onClick={prevStep} className="me-2">Voltar</Button>
              <Button onClick={nextStep} disabled={selectedMaterials.length === 0}>Próximo</Button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3>Detalhes do Orçamento</h3>
              <p><strong>Cômodo:</strong> {selectedRoom}</p>
              <p><strong>Móveis:</strong> {selectedFurniture.join(', ')}</p>
              <p><strong>Materiais:</strong> {selectedMaterials.join(', ')}</p>
              <FormOrcamento
                selectedRoom={selectedRoom}
                selectedFurniture={selectedFurniture}
                selectedMaterials={selectedMaterials}
              />
              <Button onClick={prevStep} className="me-2">Voltar</Button>
            </div>
          )}

          {step > 1 && step < 4 && (
            <div className="mt-3">
              <Button onClick={prevStep}>Voltar</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Orcamento;
