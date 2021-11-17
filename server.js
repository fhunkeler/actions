import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

app.get("/hello", (req, res) => {
  return res
    .status(201)
    .json({
      hello: "world"
    });
});

export default app;
