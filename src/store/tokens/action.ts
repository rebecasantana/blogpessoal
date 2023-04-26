export type Action ={type:"ADD_TOKEN"; playload:string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    playload: token
})







//type é como se fosse uma modelagem, interface