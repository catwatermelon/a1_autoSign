const filterExistCookie = (env, envCookies) => {
    return envCookies.map(key=>env[key]).filter(Boolean);
};
module.exports = {
    getUsers(env) {
        const envCookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        const cookies = filterExistCookie(env, envCookies);
        const paramsEntries = cookies.map(paramsStr=>paramsStr.split('&')).map(param=>param.split('='));
        return Object.fromEntries(paramsEntries);
    }
};
