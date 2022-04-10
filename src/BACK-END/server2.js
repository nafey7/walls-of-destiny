const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Customer = require('./Models/customers');
const Admin = require('./Models/admin');
const Product = require('./Models/products');
const Discount = require('./Models/discount');
const Cart = require('./Models/cart');


const app = express();

// const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/utilities?retryWrites=true&w=majority';

const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/DB?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => app.listen(8000))
    .catch((err) => console.log(err));


app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyparser.json());
app.use(morgan('dev'));



app.post('/signup', (req,res) => {
    // handle username and email not repeat

    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined" || typeof req.body.name === "undefined" || typeof req.body.contact === "undefined" || typeof req.body.address === "undefined" || typeof req.body.email === "undefined")
    {
        res.send("Please fill all spaces");
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
            console.log("SAVE HOGYA HAI");node 
            console.log(data);
            res.send("Success");
        }
        else{
            console.log("Error aggya hai");
            console.log(err);
            // username corner case handle
            res.send("Make sure username is unique");
        }
    })

    
    })


app.post('/loginAdmin', (req,res) => {

    if(typeof req.body.username === "undefined" || typeof req.body.password === "undefined")
    {
        res.send("Please fill all spaces");
        return;
    }

    Admin.find({username: req.body.username, password: req.body.password}, (err,data) => {

        // returns array of objects
        // console.log(data);

        if (data.length >= 1){
            console.log("USER HAS BEEN FOUND");
            res.send(data);
        }
        else if (data.length == 0){
            console.log("USER NOT FOUND");
            res.send("Incorrect Username or Password");
            return;
        }
        

    });
        
});