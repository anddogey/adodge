import express from 'express';
import cors from 'cors';

export class API {
    static start() {
        const app = express();
        const port = process.env.PORT || 80; // Specific to Heroku
        app.use(express.json());
        app.use(cors({ optionsSuccessStatus: 200 })); // Specific to freeCodeCamp projects

        app.get('/', (req, res) => {
            res.send('Hello world!');
        });

        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }
}
