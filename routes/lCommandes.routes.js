import express from "express";
import {
  getLigneCommandes,
  getLigneCommande,
  updateLigneCommande,
  createLigneCommande,
  deleteLigneCommande,
} from "../controllers/lCommandes.controllers.js";

const router = express.Router();

router.get("/", getLigneCommandes);
router.get("/:id", getLigneCommande);
router.post("/", createLigneCommande);
router.put("/", updateLigneCommande);
router.delete("/:id", deleteLigneCommande);

export default router;
