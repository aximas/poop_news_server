import {Request, Response} from 'express';
import axios from 'axios';
import {NewsAPI} from '../core/network/api';
import {getQueryToString, Query} from '../core/heplers/getQueryToString';

class NewsController {
    async get(req: Request<{}, {}, {}, Query>, res: Response) {
        if (req.query) {

            const queryString = getQueryToString(req.query);
            try {
                const news = await axios.get(`${NewsAPI.getAll}${queryString}`);
                return res.status(200).json(news.data);
            } catch (e: Error | any) {
                return res.status(e.response.status).json({...e.response.data});
            }

        } else {
            try {
                const news = await axios.get(`${NewsAPI.getAll}`);
                return res.status(200).json(news.data);
            } catch (e: Error | any) {
                return res.status(e.response.status).json({...e.response.data.results});
            }
        }
    }
}

export const News = new NewsController();