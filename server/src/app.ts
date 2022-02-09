if (process.env.NODE_ENV === "test") require("dotenv").config();
import ex from "express";
import helmet from "helmet";
import { json, urlencoded } from "body-parser";

function express() {
  const app = ex();

  app.use(helmet({ hidePoweredBy: true }));
  app.use(urlencoded({ extended: true }));
  app.use(json());

  // app.use(process.env.API_PREFIX || "/v1", routes);

  app.get("/health", (_, res) => {
    res.json({ message: "Server is running :D" });
    res.status(200);
  });

  app.set("port", process.env.PORT || 3333);

  return app;
}

export default express();
