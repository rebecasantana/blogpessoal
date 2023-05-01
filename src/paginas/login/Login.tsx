import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addId, addToken } from "../../store/tokens/action";
import { login } from "../../service/service";

function Login() {
  const history = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
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

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", userLogin, setRespUserLogin);
      toast.success("Usuario logado com sucesso", {
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
      console.log(error);

      toast.error("Usuário ou senha inválidos!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      history("/home");
    }
  }, [respUserLogin.token]);

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      alignItems={"center"}
      className="fundologin"
    >
      <Grid alignItems={"center"} xs={6}>
        <Box paddingX={15}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h4"
              gutterBottom
              component="h6"
              align="center"
              style={{ fontWeight: "bold", color: "#0f5ad1" }}
            >
              {" "}
              Entrar
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="h3"
              align="center"
              style={{ fontWeight: "regular", color: "#000000" }}
            >
              {" "}
              Acesse sua conta agora mesmo.
            </Typography>
            <TextField
              variant="outlined"
              name="usuario"
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              label="Usuário"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              name="senha"
              error={userLogin.senha.length < 8 && userLogin.senha.length > 0}
              helperText={
                userLogin.senha.length < 8 && userLogin.senha.length > 0
                  ? "Senha incorreta"
                  : ""
              }
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              variant="outlined"
              label="Senha"
              margin="normal"
              fullWidth
            ></TextField>
            <Box marginTop={1} textAlign={"center"}>
              <Button
                className="buttonlogin"
                type="submit"
                variant="contained"
                fullWidth
              >
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={2}>
              <Typography marginTop={1} align="center" variant="body1">
                Ainda não tem uma conta?{" "}
                <Link
                  to="/cadastroUsuario"
                  style={{ color: "#3F51B5", font: "bold" }}
                >
                  Cadastre-se aqui
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid xs={5} className="imagemlogin"></Grid>
    </Grid>
  );
}

export default Login;
