import mongoose from "mongoose";
const ligneCommandeSchema = mongoose.Schema({
  refarticle: { type: mongoose.Schema.Types.ObjectId, ref: "article" },
  refcommande: { type: mongoose.Schema.Types.ObjectId, ref: "commande" },
  qte_ach: { type: Number, required: true },
  remise: { type: Number, required: false },
  prix_unit: { type: Number, required: true },
  tot_ligne: { type: Number, required: false },
});

const LigneCommande = mongoose.model("lignecommande", ligneCommandeSchema);
export default LigneCommande;
