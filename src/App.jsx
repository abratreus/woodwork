
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Catalogo from './Pages/Catalogo/Catalogo.jsx'
import Orcamento from './Pages/Orcamento/Orcamento.jsx'
import Login from './Pages/Conta/Login.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.jsx";
import Cadastro from './Pages/Conta/Cadastro.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const location = useLocation();

  return (
    <div>
    <ErrorBoundary>
      {location.pathname !== '/login' && location.pathname !== '/cadastro' && <NavBar />}
      <main id="main" style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/orcamento" element={<Orcamento/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {location.pathname !== '/login' && location.pathname !== '/cadastro' && <Footer />}
    </ErrorBoundary>
    </div>
  );
}

export default App;
