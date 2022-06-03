const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = { climate: "/v1" };
    this.middlewares();
    this.routes();
  }
  middlewares() {
    //CORS - Para poder manejar las rutas desde archivos diferentes
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json()); //decimos que la info que reciba lo haga JSON
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.climate, require("../routes/climate.routes.js"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto " + this.port);
    });
  }
}

module.exports = Server;
