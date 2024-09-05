require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  // url para utilizar com railway,
  url: 'postgresql://postgres:WDFTqwfTFKZRPpJSYmEmPgkncVaWrnRG@junction.proxy.rlwy.net:22573/railway',

  // utilizando .env
  // host: process.env.PG_HOST,
  // port: process.env.PG_PORT,
  // username: process.env.PG_USERNAME,
  // password: process.env.PG_PASSWORD,
  // database: process.env.PG_DATABASE,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
