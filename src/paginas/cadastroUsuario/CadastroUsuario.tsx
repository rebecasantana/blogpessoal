import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";


function CadastroUsuario() {
  const history = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [usuarioResult, setUsuarioResult] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await CadastroUsuario("/usuarios/", usuario, setUsuarioResult);
        toast.success("Usuário cadastrado com sucesso", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        toast.error("Por favor, verifique os campos!", {
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
    } else {
      toast.error("As senhas não coincidem!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setConfirmarSenha("");
      setUsuario({
        ...usuario,
        senha: "",
      });
    }
  }

  useEffect(() => {
    if (usuarioResult.id !== 0) {
      history("/login");
    }
  }, [usuarioResult]);

  function back() {
    history("/login");
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundocadastro"
    >
      <Grid item xs={6} className="imagem-cadastro"></Grid>
      <Grid item xs={6} alignItems={"center"}>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              style={{ fontWeight: "bold", color: "#283593" }}
            >
              Cadastrar
            </Typography>
            <TextField
              variant="outlined"
              name="nome"
              value={usuario.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Nome completo"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="usuario"
              value={usuario.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Usuário (endereço de e-mail)"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              variant="outlined"
              name="foto"
              value={usuario.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Foto (URL)"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="senha"
              value={usuario.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              label="Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              variant="outlined"
              label="Confirmar Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <Box marginTop={2} textAlign={"center"}>
              <Button
                onClick={back}
                variant="contained"
                style={{ marginRight: "10px" }}
                className="button"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="contained" className="button">
                Cadastar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
