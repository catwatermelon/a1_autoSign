module.exports = {
    getUsers(env) {
        const cookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        return cookies.map(key=>JSON.parse(env[key])).filter(Boolean);
    }
};
