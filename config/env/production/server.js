module.exports = ({ env }) => ({
    url: env("MY_HEROKU_URL"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ['3U7IoCfuxOf4vFo3JXJwVQ==', '1yEub+2E/TUn1PzPUx5wvw==','iOJ+MarDOz8YbfBgA4QhOw==','XWHjgZV33rEo/t2IURmlAQ==']),
    },
  });