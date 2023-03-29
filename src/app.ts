import express, {Request, Response} from 'express';
import {signUpRouter} from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('*', (req: Request, res: Response) => {
    return res.status(200).json({message: 'welcome'});
});

app.use(signUpRouter);

export default app;
