// importer express
const express = require("express"); // import express from "express"

// initialiser express
const app = express();

/**CRUD operations in database :
 * Create <=> POST
 * Read   <=> GET
 * Update <=> PUT/PATCH
 * Delete <=> DELETE
 */
//

// Endpoints :

// GET pour recuperer des donnees
app.get("/", (req, res) => {
  res.send("hello get");
});

app.get("/product", (req, res) => {
  res.send("hello get product");
});

// POST pour envoyer des donnees
app.post("/", (req, res) => {
  res.send("hello post !");
});

// PUT pour mettre a jour des donnees
app.put("/", (req, res) => {
  res.send("hello put !");
});

// PATCH pour mettre a jour une donnees
app.patch("/", (req, res) => {
  res.send("hello patch !");
});

// DELETE pour supprimer des donnees
app.delete("/", (req, res) => {
  res.send("hello delete !");
});

// Lancer le serveur
app.listen(5000, () => {
  console.log("Listening on http://localhost:" + 5000);
});
