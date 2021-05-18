// npm i express nodemon morgan helmet cors mongoose uuid joi
// Scrum agile

// PACKAGES :

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const todoRouter = require("./api/todo/router");
const userRouter = require("./api/user/router");

// Pour connecter la base de donnees
const mongoose = require("mongoose");

// Pour utiliser les variable d'environnements
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 2000;

// Etablir la connexion a la base de données et le serveur backend
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

// On affiche un message une fois que la base est connectée
db.once("open", () => console.log("Connected to database !!"));

// MIDDLEWARES :

/**
 * Custom middleware :
 * Les requetes sont valable seulement entre 8:00 et 16:00
 */
// app.use((req, res, next) => {
//   const time = new Date().getHours();
//   if (time >= 8 && time <= 16) {
//     next();
//   } else {
//     res.status(400).send({
//       message: "Service not available",
//     });
//   }
// });

// Pour lire les données en JSON
app.use(express.json());

// Pour afficher les requetes qui arrivent au server sur la console
app.use(morgan("combined"));

// Pour la sécurité
app.use(helmet());

// Pour le cross origin server error
app.use(cors());

app.use("/todos", todoRouter);
app.use("/user", userRouter);
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
