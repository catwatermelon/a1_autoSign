module.exports = {
    filterExistCookie(cookies) {
        return cookies.map(key=>env[key]).filter(Boolean);
    },
    getUsers(env) {
        const cookies = filterExistCookie(Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/)));
        const paramsEntries = cookies.map(paramsStr=>paramsStr.split("&"))).map(param=>param.split('='));
        return Object.fromEntries(paramsEntries);
    }
};
