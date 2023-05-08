require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const db = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log('conectado!!');
  } catch (error) {
    console.error(`Error al conectar a la base de datos: ${error}`);
    throw error;
  }
};

export default db;
