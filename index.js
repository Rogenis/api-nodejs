const express = require('express');
const router = require('./src/routes/routers')
const app = express();

app.use(express.urlencoded({extended: false}))  //  Integrado para analisar JSON 
app.use(router)

app.listen(3000, () => {
    console.log("Server running on port 3000! 🚀")
})


