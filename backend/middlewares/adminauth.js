const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets")


function adminMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwttoken = words[1]
    const decodedtoken = jwt.verify(jwttoken, JWT_SECRET)
    if(decodedtoken.username){
        req.username = decodedtoken.usernme
        next()
    } else {
        res.status(403).json({ 
            msg:"Forbidden Access"
        })
    }
}

module.exports = adminMiddleware;