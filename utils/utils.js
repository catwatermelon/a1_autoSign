module.exports = {
    getUsers(env) {
        return Object.keys(env).filter(secretName=>secretName.startsWith('COOKIE_') && Boolean(env[secretName])).map(secretName => {
            return Object.fromEntries(env[secretName].split('&').map(param => param.split('=')));
        });
    }
};
