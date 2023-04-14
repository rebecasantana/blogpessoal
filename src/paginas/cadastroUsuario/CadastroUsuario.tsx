import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  return (
    <>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid xs={6} paddingTop={2}>
          <Typography
            variant="h4"
            gutterBottom
            color={"textPrimary"}
            align="center"
          >
            Cadastrar novo usuário
          </Typography>
          <Box paddingX={8}>
            <form>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                name="Nome"
                margin="normal"
                fullWidth
                size="small"
              >
                Nome Completo
              </TextField>
              <TextField
                id="usuario"
                label="Usuário"
                variant="outlined"
                name="Usuario"
                margin="normal"
                fullWidth
                size="small"
              >
                Usuário
              </TextField>
              <TextField
                label="E-mail"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
              >
                E-mail
              </TextField>
              <TextField
                label="Confirme seu e-mail"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
              >
                Confirme seu e-mail
              </TextField>
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                name="Senha"
                margin="normal"
                fullWidth
                size="small"
              >
                Senha
              </TextField>
              <TextField
                label="Confirme sua senha"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
              >
                Confirme sua senha
              </TextField>
              <Link to={"/login"}>
                <Box paddingTop={4}>
                  <Button
                    style={{ backgroundColor: "#3F51B5" }}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Cadastrar
                  </Button>
                </Box>
              </Link>
            </form>
          </Box>
        </Grid>
        <Grid xs={4} className="fotoCadastroUsuario"></Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;
