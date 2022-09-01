import {Request, Response} from 'express';
import axios from 'axios';
import {NewsAPI} from '../core/network/api';
import {getQueryToString, Query} from '../core/heplers/getQueryToString';

class NewsController {
    async get(req: Request<{}, {}, {}, Query>, res: Response) {
        if (req.query) {
            console.log('req.query', req.query);

            const queryString = getQueryToString(req.query);
            console.log('queryString', queryString);
            try {
                const news = await axios.get(`${NewsAPI.getAll}${queryString}`);
                console.log('news', news.data);

                return res.status(200).json(news.data);

            } catch (e: Error | any) {
                console.log(e);
                return res.status(e.response.status).json({...e.response.data});
            }

        } else {
            try {
                const news = await axios.get(`${NewsAPI.getAll}`);
                console.log('news', news.data);

                return res.status(200).json(news.data);

            } catch (e: Error | any) {
                console.log(e);
                return res.status(e.response.status).json({...e.response.data.results});
            }
        }
    }
}

export const News = new NewsController();