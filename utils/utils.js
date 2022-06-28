module.exports = {
    getUsers(env) {
        return Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/)).map(item=>JSON.parse(item));
    }
};
