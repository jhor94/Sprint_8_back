import express, { Application, Request, Response } from "express";
import routeProducto from "../routes/products";
import baseDatos from "../db/connectiondb";

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares(); // siempre colocarlo antes de los routes
        this.routes();
        this.basedatosConnect()

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor rodando en el port ${this.port}`);

        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                name: "api working",
                description: "api working"
            })
        })
        // ira la ruta
        this.app.use('/api/productos', routeProducto)
    }

    midlewares(){
        this.app.use(express.json())
    }

    async basedatosConnect(){

        try{
        await baseDatos.authenticate()
        console.log("base de datos conectada")
        }catch(error){
            console.log(error)
            console.log("error en la base de datos")
    }
}
}


export default Server;
