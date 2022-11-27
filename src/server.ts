require("dotenv").config();

// récupérer les chemins alias une fois le projet déployé
if (process.env.NODE_ENV === "production") {
  require("module-alias/register");
}
import express, { Application } from "express";
import helmet from "helmet";
import http from "http";
import cors from "cors";

// cache
declare global {
  var myCache: NodeCache;
}
import NodeCache from "node-cache";
import router from "./routes";
import database from "./database";

global.myCache = new NodeCache();

const app: Application = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(require("express-status-monitor")());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// routes de l'api
app.use("/v1", router);

(async () => {
  try {
    httpServer.listen(PORT);
    console.log(`Serveur lancé sur le port ${PORT}`);

    // // CONNEXION BASE DE DONNEES
    // const dbConnected = await database();
    // if (!dbConnected.isInitialized) {
    //   throw new Error("Base de données non connectée");
    // }

    console.log("Base de données connectée");
  } catch (error) {
    console.log("error: ", error);
  }
})();
process.on("warning", e => console.warn(e.stack));
