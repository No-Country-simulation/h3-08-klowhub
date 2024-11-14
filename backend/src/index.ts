import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import db from './db/db';

import users from './routes/users.routes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get("/", (_req: Request, res: Response) => {

    res.send('Hello word!!')

});

app.use("/api/users", users)



const main = async () => {
    try {
        db.authenticate()
            .then(() => console.log("Database authenticated"))
            .catch((err: any) => console.log(err));


        db.sync({ force: false })
            .then(() => console.log("Database synced"))
            .catch((err: any) => console.log(err));

        app.listen(PORT, () => {
            console.log(`Express app running on port: ${PORT}`)

        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main()