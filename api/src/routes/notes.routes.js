const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAuth = require("../middleware/ensureAuth");

const notesRoutes = Router();

/* Função feita em aula para compreensão de conceito, mas que acabou não sendo implementada na versão final...

function myMiddleware(request, response, next) {
    console.log("Você passou pelo MiddleWare...");

    if(!request.body.isAdmin) {
        return response.json( { message: "usuário não autorizado" } );
    };

    next();
}; */

const notesController = new NotesController();

notesRoutes.use(ensureAuth);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
