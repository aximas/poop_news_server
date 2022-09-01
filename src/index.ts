import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';

import {News} from './controllers/news.controller';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); //for parsing from cookie

router.get('/news', News.get);

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

