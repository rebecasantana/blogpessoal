import axios from 'axios';

export const  api= axios.create({
    baseURL:'https://blogpessoal-1k55.onrender.com/'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
  }

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
  }

 export const busca = async(url:any,setDados:any, headers:any) =>{
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
 } 

 export const buscaId = async(url:any,setDados:any, headers:any) =>{
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
 } 

 export const post = async(url:any,dados:any,setDados: any, headers:any) =>{
  const resposta = await api.post(url,dados,headers)
  setDados(resposta.data)
 } 

 export const put = async(url:any,dados:any,setDados: any, headers:any) =>{
  const resposta = await api.put(url,dados,headers)
  setDados(resposta.data)
 } 

 export const deleteId = async(url:any,headers:any) =>{
   await api.delete(url,headers)
 } 