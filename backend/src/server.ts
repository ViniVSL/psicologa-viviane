import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_: Request, res: Response) => {
  res.json({ status: "ok", online: true });
});

export default app;
