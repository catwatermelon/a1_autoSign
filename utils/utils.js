module.exports = {
    getUsers(env) {
        return Object.fromEntries(env).filter((secretName, secretValue) => Boolean(secretValue)).map((secretName, secretValue) => {
            if(secretName.startsWith('COOKIE_')) {
                return Object.fromEntries(secretValue.split('&').map(param => param.split('=')));
            }
        });
    }
};
