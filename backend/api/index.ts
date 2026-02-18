import app from "../src/server.js"; 
import serverless from "serverless-http";

export const config = {
  runtime: 'nodejs20.x',
};

export default serverless(app);