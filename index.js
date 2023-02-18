const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const useRoutes= require("./routes/user");

const app = express()
const port = process.env.PORT||9001;

app.use(express.json());
app.use("/api", useRoutes);


app.get('/', function (req, res) {
  res.send('Prueba de la API!!!')
})


///BD
mongoose.connect("mongodb+srv://franklingonz02:Pa$$w0rd@frankutec.vuycdcb.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("conectado a db franklingonz02"))
.catch((error)=>console.error(error));

app.listen(port,()=> console.log("servidor iniciado en el puerto:",port));