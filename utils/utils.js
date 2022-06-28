module.exports = {
    getUsers(env) {
        const cookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        return cookies.map(key=>JSON.env[key]).filter(Boolean).map(item=>JSON.parse(item));
    }
};
