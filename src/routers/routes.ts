import { Router } from "express";
import { singleLinkedListRouter } from "./v/singleLinkedList.routes";

class GlobalRoutes {
    private globalRoute!: Router
    constructor() {
        this.globalRoute = Router();
    }
    loadGlobalRoutes() {
        this.globalRoute.use('/linked-list',singleLinkedListRouter.loadSingleLinkedListRoutes());
        return this.globalRoute;
    }
}
export const globalRoutes = new GlobalRoutes();