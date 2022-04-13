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

//Finding Products using categories
app.post('/CategoryMenu', (req, res) => {
    Product.find({category: req.body.category}, (err, data) => {
        if (err) {
            res.send("Something went wrong");
        }
        if (data.length >= 1){
            console.log("Products found");
            console.log(data);
            res.send(data);
        }
        else if (data.length == 0){
            console.log("No product under this category");
            res.send("Incorrect category");
            return;
        }
    })
});

//Adding to cart
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
                res.send("Product added")
            }
            else {
                console.log("here2");
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

// Deleting from cart
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

// View Cart
app.post('/ViewCart', (req, res) => {
    let cust_username = req.body.username;
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
                        "price" : result[0].price,
                        "id" : result[0]._id,
                        "pic" : result[0].picture_url,
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
                res.send("Cart is empty");
            }
        }
    })
});

//Clear cart
app.post('/ClearCart', async (req, res) => {
    let cust_username = req.body.username;
    await Cart.deleteMany({customer_username: cust_username});
    res.send("Cart Cleared Successfully");
});

//Payment Procedure
app.post('/Payment', (req, res) => {
    let cust_username = req.body.username;
    Cart.find({customer_username: cust_username}, async (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            if (data.length >= 1) {
                let array = []
                let final = [];
                for (let i = 0; i < data.length; i++) {
                    let name_product = data[i].product_name;
                    array.push(name_product);
                    array.push(data[i].quantity);
                    let result = await Product.find({name: name_product});
                    array.push(result[0].price);
                    final.push(array);
                    array = [];
                }
                res.send(final);
            }
            else {
                res.send("Cart empty");
            }
        }
    })
});
