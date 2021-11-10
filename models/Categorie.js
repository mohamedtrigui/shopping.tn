import mongoose from "mongoose";
const categorieSchema = mongoose.Schema({
  nomCategorie: { type: String, required: true },
  iconCat: { type: String, required: false },
});

const Categorie = mongoose.model("categorie", categorieSchema);
export default Categorie;
