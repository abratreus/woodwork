import React, { useState } from 'react';
import Button from '../../Components/Button/Button.jsx';
import './Conta.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/pexels-jeshoots-com-147458-834892.jpg';
import FormsContato from '../../Components/FormsContato/FormsContato.jsx';
import ReCAPTCHA from 'react-google-recaptcha';

const Cadastro = () => {
  const [credentials, setCredentials] = useState({password: '', contact: '', contactValue: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Por favor, complete o reCAPTCHA.');
      return;
    }
    console.log('Sign up attempt:', credentials);
    navigate('/');
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100 p-0 m-0">
        <Col md={8} className="d-none d-lg-block p-0">
          <div className="login-image">
            <img src={loginImage} alt="Cadastro" className="img-fluid w-100 h-100 object-fit-cover" />
            <div className="image-overlay">
            <h2>Bem-vindo de volta</h2>
            <p>Entre na sua conta para acessar seu histórico e solicitar seu orçamento</p>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-center h-100">
          <form className="login-form shadow-lg bg-body-tertiary" onSubmit={handleSubmit}>  
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={credentials.password}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <FormsContato value={credentials.contact} onChange={handleChange} />
            {credentials.contact && (
              <input
                type={'tel'}
                name="contactValue"
                value={credentials.contactValue}
                onChange={handleChange}
                required
                className="form-control mb-3 "
                placeholder='Número de Telefone'
              />
            )}
            <ReCAPTCHA
              sitekey="6Le9FAEsAAAAAEXhZq-lMDgvu9y3Wm1laJbZgCYq" // Chave real do Google reCAPTCHA
              onChange={handleCaptchaChange}
              className="mb-3"
            />
            <Button type="submit" className="w-100">Cadastrar-se</Button>
            <Link to="/" className="btn btn-secondary mb-3 align-self-start">
              <i className="bi bi-arrow-left-circle"></i> Voltar
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
