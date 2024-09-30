const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

/* Função feita em aula para compreensão de conceito, mas que acabou não sendo implementada na versão final...

function myMiddleware(request, response, next) {
    console.log("Você passou pelo MiddleWare...");

    if(!request.body.isAdmin) {
        return response.json( { message: "usuário não autorizado" } );
    };

    next();
}; */

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;