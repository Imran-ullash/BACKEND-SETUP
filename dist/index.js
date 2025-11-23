import express, {} from "express";
import cors from "cors";
const app = express();
import dotenv from 'dotenv';
app.use(cors());
dotenv.config();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
export default app;
//# sourceMappingURL=index.js.map