import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';
import dotenv from 'dotenv';

dotenv.config();
// const express = require('express')
const app = express();

// content-type: application/json
app.use(bodyParser.json({ limit:"30mb", extended: true}));
// content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));

//cors
app.use(cors());

app.use('/posts', postRoutes)

//use mongo cloud atlas
const CONNECTION_URL =process.env.CONNECTION_URL;
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
});
// mongoose.set('useFindAndModify', false);