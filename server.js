const express = require('express')
const app = express();
const cors = require('cors')

require('dotenv').config();

// middleware bodyparser
app.use(express.json());

//created express server by using .env
const port = process.env.PORT || 4000
app.listen( port , ()=> {
    console.log(`server running at port ${port} `)
})
 
// mongoDB connection
const dbconnect = require('./config/dbconnection');
dbconnect(); 
 
//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontendL
app.use(cors({
    origin: process.env.CORS_HOST,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

//routers setup
const routers = require('./routes/dashbord-router');
app.use('/api/v1', routers);