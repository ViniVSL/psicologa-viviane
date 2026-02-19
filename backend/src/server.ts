import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Servidor Psicóloga Viviane - API Online",
    version: "1.0.0",
    environment: "production (2026)"
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    online: true,
    timestamp: new Date().toISOString()
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    error: "Rota não encontrada",
    message: "Verifique o endpoint solicitado."
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Erro interno no servidor",
    message: err.message
  });
});

export default app;