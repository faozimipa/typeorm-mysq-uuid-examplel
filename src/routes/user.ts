import { Router } from "express";
import UserController from "../controller/userController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

router.get("/", [checkJwt, checkRole(['ADMIN'])], UserController.listAll);

router.get("/:id", [checkJwt, checkRole(['ADMIN'])], UserController.getOneById);

router.post("/", [checkJwt, checkRole(['ADMIN'])], UserController.newUser);

export default router;
