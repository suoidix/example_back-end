const express = require('express');
const app = express();
const axios = require('axios');
//npm install cors
const cors = require('cors');
//npm install dotenv
//require dotenv for api var
require("dotenv").config();

const corsOptions = {
    //in the future may want to have only the URL to the front end with access to backend 
    origin:"*",
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

async function getMovieData(req, res){
    
    const apiUrl = process.env.API_URL;
    const fetchedData = await axios.get(apiUrl);

    res.json(fetchedData.data);
}

app.get('/api', getMovieData);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})