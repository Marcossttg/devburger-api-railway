const config = {
  dialect: 'postgres',
  // URL para utilizar com Railway
  url: 'postgresql://postgres:WDFTqwfTFKZRPpJSYmEmPgkncVaWrnRG@junction.proxy.rlwy.net:22573/railway',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

export default config;

// module.exports = {
//   dialect: 'postgres',
//   // url para utilizar com railway,
//   url: 'postgresql://postgres:WDFTqwfTFKZRPpJSYmEmPgkncVaWrnRG@junction.proxy.rlwy.net:22573/railway',

//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// }
