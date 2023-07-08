const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
const cors = require("cors");

const cookieparser = require("cookie-parser");
const port = process.env.PORT;

const corsOptions = {
  origin:
    "https://64a96942e7faff0008fda5ce--loquacious-mandazi-a43358.netlify.app/",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true, // Add this line

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
