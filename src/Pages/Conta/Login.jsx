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
import Modal from '../../Components/Modal/Modal.jsx';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', contact: '', contactValue: '' });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotCaptchaToken, setForgotCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleForgotEmailChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotCaptchaChange = (token) => {
    setForgotCaptchaToken(token);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotCaptchaToken) {
      alert('Por favor, complete o reCAPTCHA.');
      return;
    }
    // Here you would typically send a request to your backend to initiate password reset
    console.log('Password reset request for:', forgotEmail);
    alert('Um link de redefinição de senha foi enviado para seu email.');
    setShowForgotPassword(false);
    setForgotEmail('');
    setForgotCaptchaToken(null);
  };

  const closeModal = () => {
    setShowForgotPassword(false);
    setForgotEmail('');
    setForgotCaptchaToken(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Por favor, complete o reCAPTCHA.');
      return;
    }
    console.log('Login attempt:', credentials);
    navigate('/');
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100 p-0 m-0">
        <Col md={8} className="d-none d-lg-block p-0">
          <div className="login-image">
            <img src={loginImage} alt="Login" className="img-fluid w-100 h-100 object-fit-cover" />
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
            <div className='d-flex flex-column align-items-center'>
              <ReCAPTCHA
                sitekey="6Le9FAEsAAAAAEXhZq-lMDgvu9y3Wm1laJbZgCYq" // Chave real do Google reCAPTCHA
                onChange={handleCaptchaChange}
                className="mb-3 "
              />
            </div>
            <Button type="submit" className="w-100">Entrar</Button>
            <div className='d-flex justify-content-between'>
              <Link to="/" className="btn btn-secondary mb-3 align-self-start">
                <i className="bi bi-arrow-left-circle"></i> Voltar
              </Link>
              <button type="button" className="btn btn-link mb-3 align-self-start p-0" onClick={handleForgotPassword}>
                Esqueci minha Senha
              </button>
            </div>
          </form>
        </Col>
      </Row>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Esqueci minha senha</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleForgotSubmit}>
                  <div className="mb-3">
                    <label htmlFor="forgotEmail" className="form-label">Digite seu email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="forgotEmail"
                      value={forgotEmail}
                      onChange={handleForgotEmailChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-center">
                    <ReCAPTCHA
                      sitekey="6Le9FAEsAAAAAEXhZq-lMDgvu9y3Wm1laJbZgCYq"
                      onChange={handleForgotCaptchaChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Enviar link de redefinição</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showForgotPassword && <div className="modal-backdrop fade show" onClick={closeModal}></div>}
    </Container>
  );
};

export default Login;
