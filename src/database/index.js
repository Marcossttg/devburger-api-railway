import Sequelize from 'sequelize.js'

import configDatabase from '../config/database.js'

import mongoose from 'mongoose.js'

import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'


const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:WDFTqwfTFKZRPpJSYmEmPgkncVaWrnRG@junction.proxy.rlwy.net:22573/railway')
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:gqSdwrjWqmlChGBucQgrsjoBtpVKZslJ@junction.proxy.rlwy.net:30960',
    )
  }
}

export default new Database()
