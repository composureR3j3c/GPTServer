require(`dotenv`).config();
const express = require(`express`);
const bodyParser = require(`body-parser`);
const axios = require(`axios`);
var cors = require('cors')

const https=require('https');
const fs=require('fs');

// const { postFromTelegram } = require('./src/routes/route');

const app = express(); 
app.use(bodyParser.json());

app.use(cors())

const fim = require('./routes/gpT')
app.use('/', fim)
  
app.post("/", async (req, res) => {
    res.send("Server UP!")  
  })
 
app.listen(process.env.PORT || 5000, async () => {
 console.log("listening on port", 5000 || process.env.PORT);
//   await init();
});  
