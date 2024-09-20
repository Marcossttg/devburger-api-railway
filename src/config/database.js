module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'devburger',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

/* // utilizando .env
  // require('dotenv').config();

  // module.exports = {
  //   dialect: 'postgres',
  // host: process.env.PG_HOST,
  // port: process.env.PG_PORT,
  // username: process.env.PG_USERNAME,
  // password: process.env.PG_PASSWORD,
  // database: process.env.PG_DATABASE,
  // url para utilizar com railway,
  // url: 'postgresql://postgres:WDFTqwfTFKZRPpJSYmEmPgkncVaWrnRG@junction.proxy.rlwy.net:22573/railway',
  //   define: {
  //     timestamps: true,
  //     underscored: true,
  //     underscoredAll: true,
  //   },
  // }
*/
