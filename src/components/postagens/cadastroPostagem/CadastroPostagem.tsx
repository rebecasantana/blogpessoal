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
import {Tema} from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../services/service";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroPostagem() {
    
    const history  = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
      )
      const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
      )
      
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    });
 
    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        buscaTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function buscaTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history('/posts')

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}  id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl>
            <InputLabel>Tema</InputLabel>
            <Select
              variant="standard"
              onChange={(event) =>
                buscaId(`/temas/${event.target.value}`, setTema, {
                  headers: { Authorization: token },
                })
              }
            >
              {temas.map((tema) => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a sua postagem</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type='submit' disabled={tema.id === 0}>
            {tema.id === 0 ? 'selecione um tema' : 'cadastrar'}
          </Button>
        </form>
      </Container>
  );
}

export default CadastroPostagem;