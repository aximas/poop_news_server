export const NewsAPI = {
    getAll: `${process.env.NEWS_API_URL}/news?apikey=${process.env.NEWS_API_PUB_KEY}`
}