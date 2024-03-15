import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'

// const express = require('express')
const app = express();

app.use('/posts', postRoutes)

// content-type: application/json
app.use(bodyParser.json({ limit:"30mb", extended: true}));
// content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));

//cors
app.use(cors());

//use mongo cloud atlas
const CONNECTION_URL ='';
const PORT = process.env.PORT ||  5000
//connect return a promise
mongoose.connect(
    CONNECTION_URL,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
).then(() => {
    app.listen(PORT, () => {
        console.log(`Server runing on port: ${PORT}`)
    })
}).catch((err) => {
    console.log(err.message)
})
