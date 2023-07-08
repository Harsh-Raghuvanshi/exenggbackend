const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");

const cookieparser = require("cookie-parser");
const port = process.env.PORT;

const corsOptions = {
  origin:
    "https://64a962b14bbc527c3a702b4b--loquacious-mandazi-a43358.netlify.app",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieparser());

require("./conn");
const router = require("./Router/routing");
app.use(router);

app.listen(port, () => {
  console.log(`The server is listening on port : ${port}`);
});
