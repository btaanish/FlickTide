import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

//app config
const app = express();
const port = 9000;

//middlewares

//DB Config
const connection_url =
  "mongodb+srv://btaanish07:BSvxcxVJAaYiJoaS@tiktok-mern.psug0pg.mongodb.net/?retryWrites=true&w=majority&appName=tiktok-mern";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).json(Data));

app.post("v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
