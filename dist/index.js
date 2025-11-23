import express, {} from "express";
import cors from "cors";
import { config } from "dotenv";
import dotenv from 'dotenv';
const app = express();
app.use(cors());
dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
//# sourceMappingURL=index.js.map