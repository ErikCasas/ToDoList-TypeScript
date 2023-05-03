require('dotenv').config();
import app from './app';
import db from './config';

const PORT = process.env.PORT || 3003;


const server = (() => {
  db();
  app.listen(PORT, () => console.log('server on PORT =>', PORT));
})();
