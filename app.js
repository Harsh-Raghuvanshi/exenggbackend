const dotenv =require('dotenv')
dotenv.config({path:'./config.env'});
const express=require('express');
const app=express();
const cors = require("cors");

const cookieparser=require('cookie-parser');
const port=process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin: "https://64a95c317ed34f7dc42eae4d--loquacious-mandazi-a43358.netlify.app",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
}));

require('./conn');
const router=require('./Router/routing');
app.use(router);




app.listen(port,()=>{
    console.log(`The server is listening on port : ${port}`)
})