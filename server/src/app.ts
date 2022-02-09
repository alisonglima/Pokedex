if (process.env.NODE_ENV === "test") require("dotenv").config();
import express from "express";
import helmet from "helmet";
import { json, urlencoded } from "body-parser";

function app() {
  const server = express();

  server.use(helmet({ hidePoweredBy: true }));
  server.use(urlencoded({ extended: true }));
  server.use(json());

  // server.use(process.env.API_PREFIX || "/v1", routes);

  server.get("/health", (_, res) => {
    res.json({ message: "Server is running :D" });
    res.status(200);
  });

  server.set("port", process.env.PORT || 3333);

  return server;
}

export default app();
