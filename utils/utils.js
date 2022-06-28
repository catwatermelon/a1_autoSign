module.exports = {
    getUsers(env) {
        const cookies = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        return cookiesmap(key=>JSON.parse(env[key])).filter(Boolean);
    }
};
