require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports =mongoose;
