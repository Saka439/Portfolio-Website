const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/portfolio_dev';

const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialectOptions: process.env.NODE_ENV === 'production' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } : {}
});

module.exports = { sequelize };
