const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => { console.log("db connected sucessfully") })
        .catch((err) => {
            console.log(err.message + "db connection failed")
            process.exit(1)
        })
}

module.exports = dbconnect;