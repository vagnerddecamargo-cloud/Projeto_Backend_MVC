const express = require("express")

const usersController = require("./controllers/userController")

const app = express()

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}



app.get("/", callbackDaRaiz)

app.get("/users", usersController.getAllUsers)


module.exports = app