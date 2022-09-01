"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryToString = void 0;
const getQueryToString = (query) => {
    const queryString = [];
    const keys = Object.keys(query);
    keys.forEach(key => {
        queryString.push(key + '=' + query[key]);
    });
    if (queryString.length > 1)
        return '&' + queryString.join('&');
    else
        return '&' + queryString.join('');
};
exports.getQueryToString = getQueryToString;
//# sourceMappingURL=getQueryToString.js.map