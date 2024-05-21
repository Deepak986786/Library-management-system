import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import bookRoute from "./routes/book.route.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

// user Routes
app.use("/user", userRoute);
//book Routes
app.use("/book", bookRoute);

export { app };
