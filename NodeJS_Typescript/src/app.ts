import e from "express"

import type {Request, Response, NextFunction} from 'express';

const app: e.Express = e();
const PORT = 3000;

app.use(e.json());

interface CustomRequest extends Request {
    startTime?: number;
}

interface User {
    name: string;
    email: string;
}

// middleware -> add starttime to request object
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
    req.startTime = Date.now();

    next();
})

// post route -> newUser
// Request object contains : Request<{type of params}, {type of res body}, {type of req body}, {type of query}>

app.post('/user', (req: Request<{}, {}, User>, res: Response) => {
    const {name, email} = req.body;

    res.json({
        message : `User created successfully!!, Hello ${name}!`
    })
})

// user based on ID

app.get('/users/:id', (req: Request<{id : string}>, res: Response) => {
    const {id} = req.params

    res.json({
        message : `User fetched with id: ${id}`
    })
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});