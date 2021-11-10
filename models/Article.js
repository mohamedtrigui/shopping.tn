import mongoose from "mongoose";
const articleSchema = mongoose.Schema({
  reference: { type: String, required: true },
  designation: { type: String, required: true },
  prixAchat: { type: Number, required: false },
  prixVente: { type: Number, required: false },
  prixSolde: { type: Number, required: false },
  marque: { type: String, required: true },
  qteStock: { type: Number, required: false },
  caracteristiques: { type: String, required: false },
  imageartpetitf: { type: String, required: false },
  imageartgrandf: { type: Array, required: false },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: "categorie" },
  scategorie: { type: mongoose.Schema.Types.ObjectId, ref: "scategorie" },
});

const Article = mongoose.model("article", articleSchema);
export default Article;
