module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ['3U7IoCfuxOf4vFo3JXJwVQ==', '1yEub+2E/TUn1PzPUx5wvw==','iOJ+MarDOz8YbfBgA4QhOw==','XWHjgZV33rEo/t2IURmlAQ==']),
  },
});
