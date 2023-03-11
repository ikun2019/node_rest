const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// * ルーター
const feedRoutes = require('./routes/feed');

const app = express();

// * app設定
app.use(express.json());

// * ミドルウェア
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// * ルーターのマウント
app.use('/feed', feedRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running', process.env.PORT);
});