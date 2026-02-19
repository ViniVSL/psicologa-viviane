import app from "../src/server.js";
import serverless from "serverless-http";

const handler = serverless(app);

export default async (req: any, res: any) => {
  return await handler(req, res);
};