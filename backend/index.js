const express = require('express')
const { Events } = require('./db')
const app = express()
const userRouter = require("./routes/user");
const vendorRouter = require("./routes/vendor");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

const JWT_SECRET = "hd123"
// Middleware for parsing request bodies
app.use(bodyParser.json());

app.use("/user", userRouter)
app.use('/vendor', vendorRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
