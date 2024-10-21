
const { Events, Vendors } = require('../db');
const userAuthMiddleware = require('../middlewares/userauth');
const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
const ObjectId = require('mongodb').ObjectId;


router.post('/signup', async(req, res) => {
    console.log('jula jula')
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const gstin = req.body.gstin
    const contact = req.body.contact
    const email = req.body.email
    const address = req.body.address
    const service_area = req.body.service_area
    const business_category = req.body.business_category

    const newVendor = await Vendors.create({
        username,
        password,
        name,
        gstin,
        contact,
        email,
        address,
        service_area,
        business_category
    })

    res.json({
        msg:"Vendor created successfully"
    })  
})

router.post('/signin', async(req, res) => {
  const username = req.body.username
  const password = req.body.password

  const userFind = await Vendors.findOne({
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

module.exports = router;