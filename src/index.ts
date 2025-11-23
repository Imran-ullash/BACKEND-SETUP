import express, { type Application, type Request, type Response } from "express";
import cors from "cors"
const app:Application = express()
import dotenv from 'dotenv'


app.use(cors())
dotenv.config();



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;