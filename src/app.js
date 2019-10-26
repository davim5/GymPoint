import express from 'express';

class App{
  constructor(){
    this.server = express();

  }

  middlewares(){
    this.server.use(express.json())
  }

  routes(){
    this.server.use(this.routes)
  }

}

export default new App().server