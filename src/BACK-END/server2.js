const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const pbkdf2 = require('pbkdf2');
const Customer = require('./Models/customers');
const Admin = require('./Models/admin');
const Product = require('./Models/products');
const Discount = require('./Models/discount');
const Cart = require('./Models/cart');
const Order = require('./Models/order');
const generateString = require('./helperFunctions');
const cors = require('cors');
const nodemailer = require("nodemailer");
const { WrongLocation } = require('@mui/icons-material');


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

let user_data = {};
let randomstring = '';

// Customer's Signup
app.post('/signup_further', (req,res) => {
    if (req.body.pin == randomstring){
        // res.send("Success");

        Customer.insertMany({
            username: user_data.username,
            name: user_data.name,
            contact: user_data.contact,
            email: user_data.email,
            password:pbkdf2.pbkdf2Sync(user_data.password, 'habibi', 1, 32, 'sha512'),
            address: user_data.address
        }, (err,data) => {
            if (!err){

                delete user_data.username;
                delete user_data.name;
                delete user_data.address;
                delete user_data.contact;
                delete user_data.password;
                delete user_data.email;

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
    }
    else{
        res.send("Failure");
    }
})


app.post('/signup', async (req,res) => {
    // handle username and email not repeat

    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined" || typeof req.body.name === "undefined" || typeof req.body.contact === "undefined" || typeof req.body.address === "undefined" || typeof req.body.email === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }
    // add email check
    if (req.body.email.slice(-10)=='@gmail.com' || req.body.email.slice(-10)=='@yahoo.com'){
        // res.send("Enter a valid email address. Only Gmail and Yahoo email accounts are valid");
        // return;
    // }

    if (req.body.password.length <= 5){
        res.send("Password should be greater than 5 characters");
        return;
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'wallsofdestiny123@gmail.com',
          pass: 'wallsofdestiny'
        }
      });
      randomstring = generateString();
      
      let mailOptions = {
        from: 'wallsofdestiny123@gmail.com',
        to: req.body.email,
        subject: 'Welcome to the Walls of Destiny',
        html: `<p>Enter the following pin for successful sign-up</p> <h2><b>${randomstring}</b></h2>`
      };
      
      await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            console.log("yesss");
            console.log("lololol");
            user_data = {};
            user_data.username = req.body.username;
            user_data.name = req.body.name;
            user_data.address = req.body.address;
            user_data.contact = req.body.contact;
            user_data.password = req.body.password;
            user_data.email = req.body.email;
            
            
            res.send("Email Sent");
        }
      });
    

}
else{
        res.send("Enter a valid email address. Only Gmail and Yahoo email accounts are valid");
        return;
}
    });



// Customer's Login
app.post('/login', (req,res) => {
    console.log(req)
    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }


    Customer.find({username: req.body.username, password: pbkdf2.pbkdf2Sync(req.body.password, 'habibi', 1, 32, 'sha512')}, (err,data) => {

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

    Admin.find({username: req.body.username, password: pbkdf2.pbkdf2Sync(req.body.password, 'habibi', 1, 32, 'sha512')}, (err,data) => {

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

    Customer.updateMany({username: req.body.username}, {$set: {name: req.body.name, address: req.body.address, contact: req.body.contact, email: req.body.email, password: pbkdf2.pbkdf2Sync(req.body.password, 'habibi', 1, 32, 'sha512')}}, (err,data) => {
        if (!err){
            res.send("Success");
        }
        else{
            res.send("Error");
        }
        
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
        password: pbkdf2.pbkdf2Sync(req.body.password, 'habibi', 1, 32, 'sha512')
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

    Admin.updateMany({username: req.body.username}, {$set: {password: pbkdf2.pbkdf2Sync(req.body.password, 'habibi', 1, 32, 'sha512')}}, (err,data) => {
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


app.post('/AddToCart', (req, res) => {
    let cust_username = req.body.username;
    let product_name = req.body.product_name;
    let quantity = 1;
    Cart.find({customer_username: cust_username, product_name: product_name}, async (err, data) => {
        if (!err) {
            if (data.length >= 1) {
                let total = data[0].quantity;
                let id = data[0]._id;
                total = total + quantity;
                await Cart.updateOne({"_id": id}, {$set: {quantity: total}});
                res.send("Product added");
            }
            else {
                Cart.insertMany({
                    customer_username: cust_username,
                    product_name: product_name,
                    quantity: quantity
                }, (err, data) => {
                    if (!err) {
                        console.log("Hogya");
                        console.log(data);
                        res.send("Product added to cart");
                    }
                    else{
                        console.log("F");
                        res.send("Something went wrong, please try again");
                    }
                })
            }
        }
        else {
            console.log("F");
            res.send("Something went wrong");
        }
    })
});

app.post('/DeleteFromCart', (req, res) => {
    let cust_username = req.body.username;
    let product_name = req.body.product_name;
    Cart.find({customer_username: cust_username, product_name: product_name}, async (err, data) => {
        if (!err) {
            if (data != null) {
                let total = data[0].quantity;
                let id = data[0]._id;
                if (total > 1) {
                    total = total - 1;
                    await Cart.updateOne({"_id": id}, {$set: {quantity: total}});
                    res.send("Success");
                }
                else {
                    await Cart.deleteMany({customer_username: cust_username, product_name: product_name});
                    res.send("Deleted Product");
                }
            }
        }
        else {
            console.log("F");
            res.send("Something went wrong");
        }
    })
});

//Deleting Item Completely From Cart
app.post('/DeleteItem', async (req, res) => {
    let cust_username = req.body.username;
    let product_name = req.body.product_name;
    await Cart.deleteMany({customer_username: cust_username, product_name: product_name});
    res.send("Item Deleted Successfully");
});

// View Cart
app.post('/ViewCart', (req, res) => {
    let cust_username = req.body.username;
    console.log(req.body.username)
    Cart.find({customer_username: cust_username}, async (err, data) => {
        if (err) {
            console.log("F");
            console.log(err);
            res.send("Error");
        }
        else {
            if (data.length >= 1) {
                let final = []
                for (let i = 0; i < data.length; i++) {
                    let name_product = data[i].product_name;
                    let result = await Product.find({name: name_product});
                    let variables = {
                        "name" : result[0].name,
                        "price" : result[0].sales_price,
                        "id" : result[0]._id,
                        "pic" : result[0].pic,
                        "color" : result[0].color,
                        "quantity" : data[i].quantity
                    }
                    console.log(variables);
                    final.push(variables);
                }
                console.log("Hogya");
                res.send(final);
                
            }
            else {
                console.log("here")
                res.send("Cart is empty");
            }
        }
    })
});

//Payment Procedure
app.post('/Payment', async (req, res) => {
    let cust_username = req.body.username;
    let discount = (100 - (req.body.discount * 100));
    if (req.body.discount == 1) {
        discount = 0;
    }
    Cart.find({customer_username: cust_username}, (err, data) => {
        if (err) {
            console.log(err);
            res.send("Something went wrong, please try again");
        }
        else {
            for (let i = 0; i < data.length; i++) {
                let product_name = data[i].product_name;
                let quantity = data[i].quantity;
                Order.insertMany({
                    customer_username: cust_username,
                    product_name: product_name,
                    quantity: quantity,
                    status: "Processing",
                    discount: discount
                }, async (err, data) => {
                    if (!err) {
                        console.log("Hogya");
                        console.log(data);
                        await Cart.deleteMany({customer_username: cust_username});
                    }
                    else{
                        console.log("F");
                        res.send("Something went wrong, please try again");
                    }
                })
            }
            res.send("Order has been placed");
        }
    })
});

//Discount application customer
app.post('/DiscountCust', (req, res) => {
    let promo = req.body.promocode;
    let cust_username = req.body.username;
    Discount.find({promocode: promo}, async (err, data) => {
        if (err) {
            console.log(err);
            res.send('Something went wrong');
        }
        else {
            if (data.length >= 1) {
                for (let i = 0; i < data.length; i++) {
                    let cust_arr = data[i].customers;
                    let length1 = cust_arr.length;
                    let id = data[i]._id;
                    for (let j = 0; j < cust_arr.length; j++) {
                        if (cust_username == cust_arr[j]) {
                            cust_arr.splice(j, 1);
                        }
                    }
                    let length2 = cust_arr.length;
                    if (length1 == length2) {
                        res.send('Incorrect Promocode');
                    }
                    else {
                        let amount =  (1 - (data[i].percentage / 100));
                        let final = {
                            "discount" : amount
                        }
                        if (cust_arr.length == 0) {
                            console.log("Here");
                            await Discount.deleteMany({promocode: promo});
                            res.send(final);
                        }
                        else {
                            console.log("ELSEHERE")
                            await Discount.updateOne({"_id": id}, {$set: {customers: cust_arr}});
                            res.send(final);
                        }
                    }
                }
            }
            else {
                console.log("Jhoot bolta saala");
                res.send("Incorrect Promocode");
            }
        }
    })
});