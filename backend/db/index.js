

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ducheharsh:hd123@cluster0.sk8fkkq.mongodb.net/evently');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedEvents:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
     }],
    createdEvents:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
     }]
});


const EventsSchema = new mongoose.Schema({
    title: String,
    type: String,
    location: String,
    contact: String,
    price: String,
    customisation: Boolean,
    rating: Number
});

const VendorSchema = new mongoose.Schema({
    name: String,
    gstin: String,
    contact: String,
    email: String,
    address: String,
    service_area: String,
    username: String,
    password: String,
    business_category: String
  
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Vendors = mongoose.model('Vendors', VendorSchema);
const Events = mongoose.model('Events', EventsSchema);

module.exports = {
    Admin,
    User,
    Events,
    Vendors
}