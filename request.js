const axios = require('axios');
const { PUSH_URL, API_PREFIX } = require('./config');
const env = require("./utils/env");
const utils = require("./utils/utils")

console.log(process.env)

const users = utils.getUsers(env);
console.log(users);
const allRequest = users.map((user) => {
    return new Promise((resolve, reject) => {
        const url = `${API_PREFIX}?userId=${user.userId}&sign=${user.sign}&timestamp=${user.timestamp}`;
        axios.get(url).then(res => {
            const content = res.data.success ? '签到成功' : res.data.message;
            console.log(content);
            resolve(user.name + content);
        }, (err) => {
            reject(err);
        });
    })
})

const pushResult = (content) => {
    axios.post(PUSH_URL, {
        token: `${env.PUSHPLUS_TOKEN}`,
        title: `a1研究所签到结果`,
        content
    }).then(res => {
        console.log(res);
    });
}

Promise.all(allRequest).then(res => {
    pushResult(res);
}, (err) => {
    console.log(err);
    pushResult(err);
});
