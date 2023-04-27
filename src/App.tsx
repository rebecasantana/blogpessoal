import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import { Home } from "@material-ui/icons";
import { Login } from "@mui/icons-material";
import Footer from "./components/estaticos/footer/Footer";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import ListaPostagem from "./components/postagens/listapostagem/ListaPostagem";
import ListaTema from "./components/temas/ListaTema/ListaTema";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: "85vh" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/cadastrarPostagem" element={<CadastroPostagem />} />
            <Route path="/editarPostagem/:id" element={<CadastroPostagem />} />
            <Route path="/apagarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/cadastrarTema" element={<CadastroTema />} />
            <Route path="/editarTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
