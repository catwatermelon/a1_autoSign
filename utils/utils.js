module.exports = {
    getUsers(env) {
        return Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/)).map(key=>JSON.parse(env[key]));
    }
};
