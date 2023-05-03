import React from "react";
import Home from "./paginas/home/Home";
import Footer from "./components/estaticos/footer/Footer";
import "./App.css";
import Login from "./paginas/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTemas from "./components/temas/ListaTema/ListaTema";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroPostagem from "./components/postagens/cadastroPostagem/CadastroPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import Navbar from "./components/estaticos/navbar/Navbar";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route
              path="/formularioPostagem/:id"
              element={<CadastroPostagem />}
            />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
