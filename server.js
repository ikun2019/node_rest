const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// * ルーター
const feedRoutes = require('./routes/feed');

const app = express();

// * app設定
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// * ルーターのマウント
app.use('/feed', feedRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running', process.env.PORT);
});