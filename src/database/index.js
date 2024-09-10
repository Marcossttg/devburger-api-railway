import Sequelize from "sequelize";
import mongoose from "mongoose";

import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/Category";

import configDatabase from "../config/database";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase.url);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:gqSdwrjWqmlChGBucQgrsjoBtpVKZslJ@junction.proxy.rlwy.net:30960',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();


// import Sequelize from 'sequelize'

// import configDatabase from '../config/database'

// import mongoose from 'mongoose'

// import User from '../app/models/User'
// import Product from '../app/models/Product'
// import Category from '../app/models/Category'


// const models = [User, Product, Category]

// class Database {
//   constructor() {
//     this.init()
//     this.mongo()
//   }

//   init() {
//     this.connection = new Sequelize(
//       'postgresql://postgres:NMgIdHlyVINWztvqrKeDXTeXaeWObJbD@junction.proxy.rlwy.net:16122/railway',
//       // {...configDatabase,logging: false,}
//     )
//     models
//       .map((model) => model.init(this.connection))
//       .map(
//         (model) => model.associate && model.associate(this.connection.models),
//       )

//     // this.connection = new Sequelize(configDatabase.url)
//     // models
//     //   .map((model) => model.init(this.connection))
//     //   .map((model) => model.associate && model.associate(this.connection.models))
//   }

//   mongo() {
//     this.mongoConnection = mongoose.connect(
//       // 'mongodb: localhost:27017/devburger',
//       'mongodb://mongo:gqSdwrjWqmlChGBucQgrsjoBtpVKZslJ@junction.proxy.rlwy.net:30960',
//     )
//   }

//   // mongo() {
//   //   this.mongoConnection = mongoose.connect(
//   //     'mongodb://mongo:HFwInjREsFBDnqFtcInSNxfhaWXTtuFc@viaduct.proxy.rlwy.net:58412',
//   //   )
//   // }
// }
