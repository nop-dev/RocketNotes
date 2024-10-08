const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const ensureAuth = require("../middleware/ensureAuth");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

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
usersRoutes.put("/", ensureAuth, usersController.update);
usersRoutes.patch(
	"/avatar",
	ensureAuth,
	upload.single("avatar"),
	(req, res) => {
		console.log(req.file.filename);
		res.json();
	},
);

module.exports = usersRoutes;
