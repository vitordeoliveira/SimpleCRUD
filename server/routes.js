const { Router } = require("express");

const routes = Router();

const crud = require("./Controllers/CRUD_Controller");

routes.get("/", crud.index);
routes.post("/", crud.store);
routes.patch("/:id", crud.show);
routes.put("/:id", crud.update);
routes.delete("/:id", crud.delete);

module.exports = routes;
