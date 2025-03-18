module.exports = ({ env }) => ({
  url: env("VERCEL_URL")
    ? `https://${env("VERCEL_URL")}`
    : "http://localhost:1337",
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
