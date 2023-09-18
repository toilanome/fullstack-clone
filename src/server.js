import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
import dotenv from "dotenv"
dotenv.config();

import bodyParser from "body-parser";
const app = express();

// config view engine
configViewEngine(app)

// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// init app router
initWebRoutes(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log("Thành công ở cổng", PORT);
})