const config = {
    env: process.env.NODE_ENV || "development",
    debug: process.env.APP_DEBUG === "true",
    port: parseInt(process.env.PORT || "3000"),
    getDatabaseConfig: () => ({
        database: process.env.DB,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!),
    }),
};

export default config;