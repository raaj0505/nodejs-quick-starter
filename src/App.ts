import express from "express";
import myroutes from "./routes/index";
import * as bodyParser from 'body-parser';


class App {
    public express: any
    constructor() {
        this.express = express();
        this.setUpApp();
        this.mountRoutes();

    }

    private mountRoutes(): void {
        const router = myroutes;
        this.express.use("/", router);
    
    }
    private setUpApp():void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}))
    }
}

export default new App().express