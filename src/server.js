const express = require("express")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

function callbackListaUsuarios(request, response) {
    const usuario = {
        id: 1,
        name: "Vagner"
    }

const listaUsuarios = [  
    {
        id: 1,
        name: "Vagner" 
    }
    ]

     response.json(listaUsuarios)
} 

app.get("/", callbackDaRaiz)

app.get("/users", callbackListaUsuarios)

app.listen(3000, () => {
    console.log("API rodando em http://localhost:3000")
})



