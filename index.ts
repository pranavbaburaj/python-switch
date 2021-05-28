import express, { Request } from "express";
import { Response } from "express-serve-static-core";
import cors from 'cors'

const port = process.env.PORT || 3000
const application = express();

application.use(cors())

application.get('/', (request:Request, response:Response):any => {
    response.send("VLM")
})

application.listen(port, ():void => {
    console.log(`localhost :${port}`)
})