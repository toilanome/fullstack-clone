import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
import dotenv from "dotenv"
dotenv.config();
const app = express();

// config view engine
configViewEngine(app)

// init app router
initWebRoutes(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
    console.log("Thành công ở cổng", PORT);
})