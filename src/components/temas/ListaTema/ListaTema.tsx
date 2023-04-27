import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaTema.css";
import Tema from "../../../models/Tema";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { busca } from '../../../services/service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )
  const history = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      history("/login");
    }
  }, [token]);

  async function getAllTemas() {
    await busca("/temas", setTemas, {
      Headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
  }, []);


  return (
    <>
      {temas.map((tema) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={"/formularioTema/${tema.id}"}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={"/deletarTema/${tema.id}"}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
