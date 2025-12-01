import data from './data/data.json' with { type: 'json' };
import express from 'express';
import cors from 'cors'
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080
app.get('/data',(req, res)=>{
    res.status(200).send(data?.data || []);
})
app.listen(port, ()=>{
    console.log('server running on port', port)
})