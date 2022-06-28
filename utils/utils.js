module.exports = {
    getUsers(env) {
        return Object.keys(env).filter(item=>Boolean(env[item])).map(secretName => {
            if(secretName.startsWith('COOKIE_')) {
                return Object.fromEntries(env[secretName].split('&').map(param => param.split('=')));
            }
        });
    }
};
