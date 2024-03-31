import { Router } from "express";
import { singleController } from "../../controller/single.controllers";

class SingleLinkedListRouter {
    private router!:Router;
    constructor() {
        this.router = Router();
    }
    loadSingleLinkedListRoutes() {
        this.router.get('/single-line-list',singleController.singleHandler);
        return this.router;
    }
}
export const singleLinkedListRouter = new SingleLinkedListRouter();