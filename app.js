import express from "express";
import dotevn from "dotenv";
dotevn.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hurray! I have successfully deployed this application on AWS.");
});

app.get("/health", (req, res) => {
  res.send("My health is OK and what about your's!");
});

export default app;
