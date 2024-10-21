
const { Events, User } = require('../db');
const userAuthMiddleware = require('../middlewares/userauth');
const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
const ObjectId = require('mongodb').ObjectId;

router.get('/events', async(req, res) => {
    try{
    const allEvents = await Events.find({})
    console.log("fetched")
    res.json(allEvents)
    }
    catch(error){
        res.json({
            msg:"Something went wrong"
        })
    }
})

router.post('/create-event',userAuthMiddleware, async(req, res) => {
    const username = req.username
    const title = req.body.title
    const type = req.body.type
    const location = req.body.location
    const contact = req.body.contact
    const price = req.body.price
    const customisation = req.body.customisation
    const rating  = req.body.rating

    const newEvent = await Events.create({
        title,
        type,
        location,
        contact,
        price,
        customisation,
        rating
    } )      
    
    const objectId = new ObjectId(newEvent._id);
    const objectIdString = objectId.toString();


    console.log(objectIdString)

    console.log("Event Created successfully")

    const user = await User.updateOne({
        username
    },{
        $push:{createdEvents:objectIdString}
    })
    
    res.json({
        msg:"Event Added Successfully"
    })

})

router.post('/signup', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    const newUser = await User.create({
        username,
        password
    })
    res.json({
        msg:"User created successfully"
    })  
})

router.post('/signin', async(req, res) => {
  const username = req.body.username
  const password = req.body.password

  const userFind = await User.findOne({
      username:username,
      password:password
  })

  console.log(username)
  console.log({username})

  if (userFind){
    const token = jwt.sign({username}, JWT_SECRET )
    res.json({token})
  }
  else{
    res.json({
        msg:"Unable to send token"
    })
  }
    
})

module.exports = router;