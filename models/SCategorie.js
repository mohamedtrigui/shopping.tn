import mongoose from "mongoose";
const sCategorieSchema = mongoose.Schema({
  nomSCategorie: { type: String, required: true },
  iconSCategorie: { type: String, required: true },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: "categorie" },
});

const SCategorie = mongoose.model("scategorie", sCategorieSchema);
export default SCategorie;
