module.exports = {
    getUsers(env) {
        const users = [env.COOKIE];

        const keys = Object.keys(env).filter(key => key.match(/^COOKIE_([0-9])+$/));
        keys.forEach(key => users.push(env[key]));

        return users.filter(cookie => !!cookie).map(item=>JSON.parse(item));
    }
};