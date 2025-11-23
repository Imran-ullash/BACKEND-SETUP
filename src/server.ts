import app from "./index.js";
import mongoose from "mongoose";



main().catch(err => console.log(err));
const port = 3000

async function main() {
  await mongoose.connect(process.env.DATABASE_URL as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

}