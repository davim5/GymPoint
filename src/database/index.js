import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Importar os models utilizados

import User from '../app/models/User';
import Student from '../app/models/Student';

// Array que contem os models
const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
