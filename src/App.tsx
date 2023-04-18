import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import React from "react";
import ListaTema from "./components/temas/ListaTema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/postagens" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
