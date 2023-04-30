import axios from 'axios';

export const  api= axios.create({
    baseURL:'https://blogpessoal-1k55.onrender.com/'
})

export const login = async(url: string, dados: object, setDados: any) => {
  const resposta = await api.post(url,dados)
  setDados(resposta.data)
}

export const cadastroUsuario = async(url: string, dados: object, setDados: any) => {
  const resposta = await api.post(url,dados)
  setDados(resposta.data)
}

export const getAll = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const getById = async(url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

export const post = async(url: any, dados: object, setDados: any, headers: any) => {
  const resposta = await api.post(url, dados, headers)
  setDados(resposta.data)
}

export const put = async(url: any, dados: object, setDados: any, headers: any) => {
  const resposta = await api.put(url, dados, headers)
  setDados(resposta.data)
}

export const deleteId = async(url: any, headers: any) => {
  await api.delete(url, headers)
}