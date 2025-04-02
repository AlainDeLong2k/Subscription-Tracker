import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

// userRouter.get("/", (req, res) => res.send({ title: "GET all users" }));
// userRouter.get("/:id", (req, res) => res.send({ title: "GET user details" }));
// userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));
// userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE user" }));
// userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE user" }));

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

export default userRouter;
