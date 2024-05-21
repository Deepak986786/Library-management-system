import { app } from "./app.js";
import { connectToDatabase } from "./db/db.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3001;
connectToDatabase()
  .then((_) => {
    app.listen(port, () => console.log("server runnning : " + port));
  })
  .catch(() => {
    console.log("mongodb connection failed");
  });
