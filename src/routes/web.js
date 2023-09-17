import express from "express";
import { handleHello, handleUserPage } from "../controller/homeController";
const router = express.Router();

const initWebRoutes = (app) =>{
    router.get("/", handleHello)

    router.get("/user", handleUserPage)

    return app.use("/",router);
}

export default initWebRoutes;