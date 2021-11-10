import express from "express";
import {
  getCommandes,
  getCommande,
  updateCommande,
  createCommande,
  deleteCommande,
} from "../controllers/commandes.controllers.js";

const router = express.Router();

router.get("/", getCommandes);
router.get("/:id", getCommande);
router.post("/", createCommande);
router.put("/", updateCommande);
router.delete("/:id", deleteCommande);

export default router;
