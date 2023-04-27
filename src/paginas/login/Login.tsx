import React, { ChangeEvent, useEffect, useState } from "react";
import "./Login.css";
import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { login } from "../../services/service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/action";

function Login() {
  const history = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState(" ");
  
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", userLogin, setToken);
      alert("Usuario logado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} alignItems="center">
          <Box paddingX={10}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h4"
                gutterBottom
                color={"textPrimary"}
                align="center"
              >
                Entrar
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                id="usuario"
                label="Usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                value={userLogin.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                id="senha"
                label="Senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign={"center"}>
                <Button type="submit" variant="contained" color="primary">
                  Logar
                </Button>
              </Box>
            </form>
            <Box display={"flex"} justifyContent={"center"} marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle2" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to={"/cadastroUsuario"}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className="textos1"
                >
                  Cadastre-se aqui
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className="imagemLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;
