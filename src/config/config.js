const env = process.env;

const config = {
    db: {
        host: env.DB.HOST || '127.0.0.1',
        user: env.DB.USER || 'root',
        password: env.DB.PASSWORD || 'root',
        database: env.DB.DATABASE || 'api'
    },
    listPerPage: env.LIST_PER_PAGE || 10,
}

module.exports = config;

