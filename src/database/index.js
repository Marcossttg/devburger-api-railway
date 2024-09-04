import Sequelize from 'sequelize'

import configDatabase from '../config/database'

import mongoose from 'mongoose'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'


const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize({
      ...configDatabase,
      logging: false,
    })
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )

    // this.connection = new Sequelize(configDatabase.url)
    // models
    //   .map((model) => model.init(this.connection))
    //   .map((model) => model.associate && model.associate(this.connection.models))
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/devburger',
    )
  }

  // mongo() {
  //   this.mongoConnection = mongoose.connect(
  //     'mongodb://mongo:HFwInjREsFBDnqFtcInSNxfhaWXTtuFc@viaduct.proxy.rlwy.net:58412',
  //   )
  // }
}

export default new Database()
