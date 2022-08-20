import envVariables from '../environment';
const headers = {
    // eslint-disable-next-line prettier/prettier
    'Accept': 'aaplication/json',
    'Content-type': 'application/json'
};
function joinURL(baseURL, url) {
    return `${baseURL}/${url}`;
}
class Service {
    constructor() {
        this.domain = envVariables.baseURL;
    }
    request(url, method = 'post', data = null) {
        url = joinURL(this.domain, url);
        const options = {
            headers,
            // eslint-disable-next-line prettier/prettier
            method,
        };
        if (data) {
            options.body = JSON.stringify({ ...data });
        }
        return fetch(url, options);
    }
}
