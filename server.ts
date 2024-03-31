import express, {Express} from 'express';
import { globalRoutes } from './src/routers/routes';
import { port } from './src/constants/constant';
class Server {
    private app!:Express;
    private port!:number;
    constructor() {
        this.loadServer();
    }
    loadServer() {
        this.app = express();
        this.port = port;
        this.loadMiddleware();
        this.loadRoutes();
        this.initServer();
    }
    loadMiddleware() {
        this.app.use(express.json());
    }
    loadRoutes() {
        this.app.use('/dsa',globalRoutes.loadGlobalRoutes());
    }
    initServer() {
        this.app.listen(this.port,() =>{
                console.log(`Listening on port ${this.port}`);
        })
    }
}
(async ()=>{
    new Server();
})();