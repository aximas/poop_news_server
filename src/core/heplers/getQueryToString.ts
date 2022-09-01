export interface Query extends Record<string, any>{
    country: string;
    category: string;
    language: string;
    domain: string;
    q: string;
    qInTitle: string;
    page: number;
}

export const getQueryToString = (query: Query) => {

    const queryString: string[] = [];
    const keys = Object.keys(query);
    keys.forEach(key => {
        queryString.push( key + '=' + query[key]);
    });

    if (queryString.length > 1) return '&' + queryString.join('&');
    else return '&' + queryString.join('');
};
