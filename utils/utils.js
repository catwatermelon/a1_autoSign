module.exports = {
    getUsers(env) {
        return Object.keys(env).filter(item=>Boolean(env[item])).map((secretName, secretValue) => {
            if(secretName.startsWith('COOKIE_')) {
                return Object.fromEntries(secretValue.split('&').map(param => param.split('=')));
            }
        });
    }
};
