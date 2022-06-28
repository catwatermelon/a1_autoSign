const filterExistCookie = (env, envCookies) => {
    return envCookies.map(key=>env[key]).filter(Boolean);
};
module.exports = {
    getUsers(env) {
        const envCookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        const cookies = filterExistCookie(env, envCookies);
        const usersInfo = cookies.map(item=>{
            return Object.fromEntries(item.split('&').map(param => param.split('=')));
        })
        return usersInfo;
    }
};
