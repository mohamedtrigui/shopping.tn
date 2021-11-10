import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import categorieRouter from "./routes/categories.routes.js";
import sCategorieRouter from "./routes/sCategories.routes.js";
import userRouter from "./routes/users.routes.js";
import commandeRouter from "./routes/commandes.routes.js";
import ligneCommandeRouter from "./routes/lCommandes.routes.js";
import articleRouter from "./routes/articles.routes.js";
// import User from "./models/User.js";

dotenv.config();

const app = express()
  .use(express.json())
  .use(
    cors({
      origin: "http://localhost:4200",
    })
  );

app.use("/api/categories", categorieRouter);
app.use("/api/scategories", sCategorieRouter);
app.use("/api/users", userRouter);
app.use("/api/commandes", commandeRouter);
app.use("/api/lcommandes", ligneCommandeRouter);
app.use("/api/articles", articleRouter);

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("successful connection DB"))
  .catch((err) => console.log("connection to DB failed" + err));

//  For test !!!
//   app.get("/", (req, res) => {
//   var myData = new User({
//     name: "mohamed",
//     telephone: "23432",
//     email: "mohamed@gmail.com",
//     password: "1234",
//     role: 1,
//   });
//   myData
//     .save()
//     .then((item) => {
//       res.send("item saved to database");
//     })
//     .catch((err) => {
//       res.status(400).send("unable to save to database");
//     });
// });

app.listen(process.env.PORT, () => console.log(`Server is listnening on port ${process.env.PORT}`));
