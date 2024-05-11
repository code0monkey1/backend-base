/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import authenticate from "../middleware/authenticate";
import { makeUserService } from "../factories/services/user-service-factory";
import { makeTokenService } from "../factories/services/token-service-factory";

const route = Router();
const userService = makeUserService();
const tokenService = makeTokenService();

const userController = new UserController(userService, tokenService);

route.get("/:userId", authenticate, userController.findById);

route.patch("/:userId", authenticate, userController.updateById);

route.get("/", authenticate, userController.findAll);

route.delete("/:userId", authenticate, userController.deleteById);

export default route;
