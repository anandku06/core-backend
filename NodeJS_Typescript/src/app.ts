import e from 'express';

const app: e.Express = e();
const PORT = 3000;

app.get('/', (req: e.Request, res: e.Response) => {
    res.send('Hello, TypeScript with Express!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});