import express, { type Application, type Request, type Response } from "express";
import cors from "cors"
import { config } from "dotenv"
import dotenv from 'dotenv'
const app:Application = express()


app.use(cors())
dotenv.config();



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;