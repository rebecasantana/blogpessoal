import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
