module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "http:",
            "localhost",
            "localhost:*",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            "http:",
            "localhost",
            "localhost:*",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            "http:",
            "localhost",
            "localhost:*",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["*"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
