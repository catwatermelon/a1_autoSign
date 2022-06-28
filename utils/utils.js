module.exports = {
    getUsers(env) {
        const cookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        console.log(cookies);
        return cookies.filter(Boolean).map(key=>JSON.parse(env[key]));
    }
};
