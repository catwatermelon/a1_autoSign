const env = process.env || {};

module.exports = {
  COOKIE_0: env.COOKIE_0,
  COOKIE_1: env.COOKIE_1,
  /* 多用户，当有1名以上用户时填写, 支持同时最多可配置5名用户 */
  COOKIE_2: env.COOKIE_2,
  COOKIE_3: env.COOKIE_3,
  COOKIE_4: env.COOKIE_4,
  COOKIE_5: env.COOKIE_5,
  PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN
};
