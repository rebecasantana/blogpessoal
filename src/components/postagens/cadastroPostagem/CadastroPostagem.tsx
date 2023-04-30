import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Container,
} from "@material-ui/core";
import "./CadastroPostagem.css";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import { Grid } from "@material-ui/core";
import Postagem from "../../../models/Postagem";
import { getAll, getById, post, put } from "../../../service/service";
import { lightBlue } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { Usuario } from "../../../models/Usuario";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

function CadastroPostagem() {
  const history = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [temas, setTemas] = useState<Tema[]>([]);

  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      history("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: null,
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await getAll("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await getById(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put("/postagens", postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizada com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      post("/postagens", postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrada com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    back();
  }

  function back() {
    history("/postagens");
  }

  return (
    <Grid container alignItems={"center"}>
      <Grid xs={6}>
        <Box className="modal-post">
          <form onSubmit={onSubmit}>
            <Typography variant="h3" component="h1" align="center">
              Cadastro de Postagem
            </Typography>
            <TextField
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatedPostagem(e)
              }
              id="titulo"
              label="titulo"
              variant="outlined"
              name="titulo"
              margin="normal"
              fullWidth
              style={{ marginTop: "2vw" }}
            />
            <TextField
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatedPostagem(e)
              }
              id="texto"
              label="texto"
              name="texto"
              variant="outlined"
              margin="normal"
              fullWidth
              minRows={4}
              multiline
            />

            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">
                Tema{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) =>
                  getById(`/temas/${e.target.value}`, setTema, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
              >
                {temas.map((tema) => (
                  <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Escolha um tema para a postagem</FormHelperText>
              <Button
                className="button-finalizar"
                type="submit"
                variant="contained"
                color="primary"
                disabled={tema.id === 0}
              >
                {tema.id === 0 ? "Selecione um tema" : "Cadastrar"}
              </Button>
            </FormControl>
          </form>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem-postagem"></Grid>
    </Grid>
  );
}
export default CadastroPostagem;
