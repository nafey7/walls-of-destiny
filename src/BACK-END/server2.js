const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
// const passwordHash = require('password-hash');
const Customer = require('./Models/customers');
const Admin = require('./Models/admin');
const Product = require('./Models/products');
const Discount = require('./Models/discount');
const Cart = require('./Models/cart');
const Order = require('./Models/order');
const cors = require('cors');



const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
}

const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/DB?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => app.listen(8000))
    .catch((err) => console.log(err));


app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));


// CUSTOMER USE CASES

// Customer's Signup
app.post('/signup', (req,res) => {
    // handle username and email not repeat

    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined" || typeof req.body.name === "undefined" || typeof req.body.contact === "undefined" || typeof req.body.address === "undefined" || typeof req.body.email === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }

    if (req.body.password.length <= 5){
        res.send("Password should be greater than 5 characters");
        return;
    }
    
    Customer.insertMany({
        username: req.body.username,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    }, (err,data) => {
        if (!err){
            console.log("SAVE HOGYA HAI"); 
            console.log(data);
            res.send("SAVE HOGYA HAI");
        }
        else{
            console.log("Error aggya hai");
            console.log(err);
            // username corner case handle
            res.send("Username already taken");
        }
    })

    
    });



// Customer's Login
app.post('/login', (req,res) => {
    console.log(req)
    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }

    Customer.find({username: req.body.username, password: req.body.password}, (err,data) => {

        if (!err){
            if (data.length >= 1){
            console.log("USER HAS BEEN FOUND");
            res.send("USER HAS BEEN FOUND");
        }
        else if (data.length == 0){
            console.log("USER NOT FOUND");
            res.send("Incorrect Username or Password");
            return;
        }
    }
    else{
        console.log(err);
        res.send("Error");
    }
        

    });
        
});



// Admin's Login
app.post('/loginAdmin', (req,res) => {

    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }

    Admin.find({username: req.body.username, password: req.body.password}, (err,data) => {

        if (!err){
            if (data.length >= 1){
            console.log("USER HAS BEEN FOUND");
            res.send("In kara isko");
        }
        else if (data.length == 0){
            console.log("USER NOT FOUND");
            res.send("Incorrect Username or Password");
            return;
        }
    }
    else{
        console.log(err);
        res.send("Error");
    }
        

    });
        
});



// landing page (Showing featured Products)
app.get('/', (req,res) => {

    Product.find({featured: "1"}, (err,data) => {
            res.send(data);

    });
        
});



// home page (Showing All Products)
app.get('/home', (req,res) => {

    Product.find( (err,data) => {
            res.send(data);

    });
        
});



// customer's profile
app.post('/customer_profile', (req,res) => {

    Customer.find({username: req.body.username}, (err,data) => {
            res.send(data[0]);

    });
        
});



// category products
app.post('/product_category', (req,res) => {

    Product.find({category: req.body.category}, (err,data) => {
            res.send(data);

    });
        
});



// search product
app.post('/search_product', (req,res) => {

    Product.find({name: req.body.name}, (err,data) => {
            // res.send(data);
            if (data.length == 0){
                // we can redirect it to the same page as well
                res.send("No Product Found");
                return;
            }
            else{
                res.send(data);
            }

    });
        
});



// Update customer info (change username, password, etc)
app.post('/update_customer_info', (req,res) => {
    // req.body will be an object

    if (req.body.password.length <= 5){
        res.send("Password should be greater than 5 characters");
        return;
    }

    Customer.updateMany({username: req.body.username}, {$set: {name: req.body.name, address: req.body.address, contact: req.body.contact, email: req.body.email, password: req.body.password}}, (err,data) => {

        res.send(data);
    });
        
});



// Deactivate Customer Account
app.post('/deactivate_account', (req,res) => {

    Customer.deleteMany({username: req.body.username}, (err,data) => {
            res.send("Account Deleted");
            console.log("Account Deleted");
    });
        
});


// ADMIN USE CASES


// Add a manager (Sort of a signup)
app.post('/signupAdmin', (req,res) => {
    // handle username and email not repeat

    console.log("This is the type of username " + typeof(req.body.username));

    if(req.body.username == "" ||  req.body.password == "" || typeof req.body.username === "undefined" || typeof req.body.password === "undefined")
    {
        res.send("Please fill all the spaces");
        return;
    }
    
    Admin.insertMany({
        username: req.body.username,
        password: req.body.password
    }, (err,data) => {
        if (!err){
            console.log(data);
            res.send("Success");
        }
        else{
                console.log(err);
                res.send("Make sure username is unique");
            
        }
    })

    
    });

// deactivate account (Admin)
app.post('/deactivate_account_admin', (req,res) => {

    Admin.deleteMany({username: req.body.username}, (err,data) => {
            res.send("Account Deleted");
            console.log("Account Deleted");
    });
        
});



// change password
app.post('/update_admin_info', (req,res) => {
    // req.body will be an object

    Admin.updateMany({username: req.body.username}, {$set: {password: req.body.password}}, (err,data) => {
        if (req.body.password.length <= 5){
            res.send("Password should be greater than 5 characters");
            return;
        }
        if (!err){
            res.send("Success");
        }
        else{
            res.send("Failed. Try Again");
        }
    });
        
});



// Add product (Admin)
app.post('/addproduct', (req,res) => {
    // handle username and email not repeat

    if(typeof req.body.name === "undefined" || typeof req.body.pic === "undefined" || typeof req.body.cost_price === "undefined" || typeof req.body.sales_price === "undefined" || typeof req.body.details === "undefined" || typeof req.body.profit === "undefined" || typeof req.body.color === "undefined" || typeof req.body.dimensions === "undefined" || typeof req.body.category === "undefined" || typeof req.body.featured === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }
    

    Product.insertMany({
        name: req.body.name,
        pic: req.body.pic,
        cost_price: req.body.cost_price,
        sales_price: req.body.sales_price,
        profit: req.body.sales_price - req.body.cost_price,
        details: req.body.details,
        color: req.body.color,
        dimensions: req.body.dimensions,
        category: req.body.category,
        featured: req.body.featured }, (err,data) => {
        
            if (!err){
            console.log("SAVE HOGYA HAI"); 
            console.log(data);
            res.send("Success");
        }
        else{
            console.log("Error aggya hai");
            console.log(err);
            res.send("Make sure format for fields is right");
        }
    })

    
    })

// Edit Product (Admin)
app.post('/editproduct', (req,res) => {

    // handle case where cost_price might contain letters


    Product.updateMany({name: req.body.name}, {$set: {
        pic: req.body.pic,
        cost_price: req.body.cost_price,
        sales_price: req.body.sales_price,
        profit: req.body.profit,
        details: req.body.details,
        color: req.body.color,
        dimensions: req.body.dimensions,
        category: req.body.category,
        featured: req.body.featured }}, (err,data) => {

        if (!err){ 
            res.send(data);
        }
        else{
            res.send("Make sure the formaat is right for all fields");
        }
    });
        
});



// Delete Product (Admin)
app.post('/deleteproduct', (req,res) => {

    Product.deleteMany({name: req.body.name}, (err,data) => {

        if (!err){
            res.send("Product Deleted")
        }
        else{
            res.send("Error");
        }
    });
        
});