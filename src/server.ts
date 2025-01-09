import express, { Request, Response, NextFunction } from "express";

const PORT = 3333;

const app = express();
app.use(express.json());

app.listen(PORT, () =>
  console.log(
    `Servidor está sendo executado na porta ${PORT} | Server is already running on port ${PORT}`
  )
);
