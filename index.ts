import express, { json, Request, urlencoded } from "express";
import { Response } from "express-serve-static-core";
import cors from 'cors'
import { createModule, Package } from "./module";
import { config } from "dotenv";
import axios, { AxiosResponse } from "axios";
import session from "express-session";

const port = process.env.PORT || 3000
const application = express();

config()

const GITHUB_CLIENT_ID = process.env.CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET


application.use(cors())
application.use(urlencoded({
    extended : true
}))
application.use(json())
application.use(session({
    secret: 'vlm',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
application.use(cookieParser)

application.get('/', (request:Request, response:Response):any => {
    response.send("VLM")
})

application.post('/create_module', (request:Request, response:Response) => {
    const module:Package = createModule(request.body)
    console.log(module)
})

application.get('/i-am-authenticated', (request:Request, response:Response):void => {
    const body = {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code: request.query.code
    };
    const opts = { headers: { accept: 'application/json' } };
    axios.post('https://github.com/login/oauth/access_token', body, opts).then((response:AxiosResponse<any>) => {
        return response.data['access_token']
    }).then((token:any) => {
        request.session.views
        response.json({"done" : true})
    }).catch((error:any) => {
        response.status(500).json({
            MessageChannel : error.message
        })
    })
})

application.get('/auth', (request:Request, response:Response):void => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
})

application.listen(port, ():void => {
    console.log(`localhost :${port}`)
})