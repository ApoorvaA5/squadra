const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

