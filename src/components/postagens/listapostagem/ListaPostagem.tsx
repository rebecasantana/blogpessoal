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
import "./ListaPostagem.css";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/service";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const [token, setToken] = useLocalStorage("token");
  const history = useNavigate();

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                Título
              </Typography>
              <Typography variant="body2" component="p">
                Texto da Postagem
              </Typography>
              <Typography variant="body2" component="p">
                Tema
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={"/formularioPostagem/${post.id"}
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
                  to={"/formularioPostagem/${post.id"}
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

export default ListaPostagem;
