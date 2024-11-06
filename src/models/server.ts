import express, { Application, Request, Response } from "express";
import cors from "cors";
import routePersonas from "../routes/personas-router";
import routerLocalizaciones from "../routes/localizaciones-router"
import routerEventos from "../routes/eventos-router"
import sequelize from "../db/connectiondb";



//conexion con mysql2
//import {connection,getConnetion} from "../db/database"

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
       /* this.app.get('/api/personas', async(req: Request,res:Response)=>{
            try{
                const connection = await getConnetion();
                const result = await connection.query("SELECT * FROM persona");
                res.json(result);
                }catch(error){
                    console.error(error);
                    res.status(500).json({message: 'Error en la base de datos'})
            }
        });*/
        // ira la ruta
        this.app.use('/api/personas', routePersonas)
        this.app.use('/api/localizaciones', routerLocalizaciones)
        this.app.use('/api/eventos', routerEventos)
    }

    midlewares(){

        this.app.use(cors({origin: 'http://localhost:4200'}));
        this.app.use(express.json())
    }

    

    async basedatosConnect(){

        try{
        await sequelize.authenticate()
        console.log("base de datos conectada")
        }catch(error){
            console.log("error")
            console.log("error en la base de datos")
    }
} // kitar para conecta bd con squelize */

}


export default Server;
