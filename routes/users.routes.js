import express from "express";
import { getUsers, getUser, updateUser, createUser, deleteUser, getuserBYEmail } from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", getuserBYEmail);

export default router;
