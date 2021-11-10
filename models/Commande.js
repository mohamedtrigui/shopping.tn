import mongoose from "mongoose";
const commandeSchema = mongoose.Schema({
  refCommande: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  dateAchat: { type: Date, required: true, default: Date.now },
  mt_total: { type: Number, required: false },
  paye: { type: Boolean, required: true, default: false },
});

const Commande = mongoose.model("commande", commandeSchema);
export default Commande;
