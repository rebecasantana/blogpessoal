import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import Usuario  from "../../models/Usuario";

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
        await CadastroUsuario(
          "/usuarios/cadastrar",
          usuarios,
          setUsuarioResult
        );
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
      <Grid item xs={5} alignItems={"center"}>
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h4"
              gutterBottom
              component="h6"
              align="center"
              style={{ fontWeight: "bold", color: "#283593" }}
            >
              Cadastrar
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h6"
              align="center"
              style={{ fontWeight: "regular", color: "#000000" }}
            >
              Preencha os campos abaixo.
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
            <Box marginTop={3} textAlign={"center"}>
              <Button
                onClick={back}
                variant="contained"
                style={{ marginRight: "10px" }}
                className="buttonCancelar"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                className="buttonCadastrar"
              >
                Cadastar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid xs={7} className="imagemcadastro"></Grid>
    </Grid>
  );
}

export default CadastroUsuario;
