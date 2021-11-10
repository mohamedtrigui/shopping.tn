import express from "express";
import {
  getCategories,
  getCategorie,
  updateCategorie,
  createCategorie,
  deleteCategorie,
} from "../controllers/categories.controllers.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategorie);
router.post("/", createCategorie);
router.put("/", updateCategorie);
router.delete("/:id", deleteCategorie);

export default router;
