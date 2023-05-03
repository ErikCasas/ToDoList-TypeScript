require('dotenv').config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const db = () => {
  mongoose.connect(process.env.URL);
  console.log("conectado!!");
};

export default db