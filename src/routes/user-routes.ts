/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import authenticate from "../middleware/authenticate";
import { makeUserService } from "../factories/services/user-service-factory";

const route = Router();
const userService = makeUserService();
const userController = new UserController(userService);

route.patch("/:userId", authenticate, userController.updateById);

route.get("/", authenticate, userController.findAll);

export default route;
