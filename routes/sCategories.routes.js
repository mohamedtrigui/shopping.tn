import express from "express";
import {
  getSCategories,
  getSCategorie,
  updateSCategorie,
  createSCategorie,
  deleteSCategorie,
  getSCategoriesByCat,
} from "../controllers/sCategories.controllers.js";

const router = express.Router();

router.get("/", getSCategories);
router.get("/cat", getSCategoriesByCat);
router.get("/:id", getSCategorie);
router.post("/", createSCategorie);
router.put("/", updateSCategorie);
router.delete("/:id", deleteSCategorie);

export default router;
