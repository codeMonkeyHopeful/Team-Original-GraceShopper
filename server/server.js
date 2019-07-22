require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();

const PORT = process.env.NODE_ENV === 'development' ? 3000 : process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('listening on ', PORT);
});
