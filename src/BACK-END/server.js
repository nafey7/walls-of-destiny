const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Customer = require('./Models/customers');
const Admin = require('./Models/admin');
const Product = require('./Models/products');
const Discount = require('./Models/discount');
const Cart = require('./Models/cart');

const app = express();

// const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/utilities?retryWrites=true&w=majority';

const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/DB?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => app.listen(7000))
    .catch((err) => console.log(err));


app.set('view engine','ejs');

app.use(express.static('public'));
app.use(morgan('dev'));


app.post('/signup', (req,res) => {
    // let username = req.body.username;
    // let name = req.body.name;
        // let username_1 = req.body.username;
        // let name_1 = req.body.name;
        // let contact_1 = req.body.contact;
        // let email_1 = req.body.email;
        // let password_1 = req.body.password;
        // let address_1 = req.body.address;
        console.log(req);
        res.send("hi");
    // const customer = new Customer({        
        
    //     username: username_1,
    //     name: name_1,
    //     contact: contact_1,
    //     email: email_1,
    //     password: password_1,
    //     address: address_1
        


    //     // username: req.body.username,
    //     // name: req.body.name,
    //     // contact: req.body.contact,
    //     // email: req.body.email,
    //     // password: req.body.password,
    //     // address: req.body.address
    // });
    // customer.save()
    //     .then ((res) => {
    //         console.log(res);
    //         res.send("Customer Sccessfully Registered")
    //     })
    //     .catch ((err) => {
    //         console.log(err);
    //     });
    
    })



// api call to add the customer to the database
// app.get('/customer_signup', (req,res) => {
//     // let username = req.body.username;
//     // let name = req.body.name;
//     const customer = new Customer({
//         username: 'Mahad123',
//         name: 'Mahad Beg',
//         contact: '0321949089',
//         email: 'mahad@gmail.com',
//         password: 'mahad',
//         address: '222 A-2'
//     });

//     customer.save()
//     .then ((res) => {
//         console.log(res);
//     })
//     .catch ((err) => {
//         console.log(err);
//     });

// })

// api call for the login of the admin
// app.get('/manager_login', (req,res) => {
//     // let username = req.body.username;
//     // let name = req.body.name;
//     const admin = new Admin({
//         username: 'Tarar123',
//         name: 'Arslan Tarar',
//         password: 'tarar'
//     });

//     admin.save()
//     .then ((res) => {
//         console.log(res);
//     })
//     .catch ((err) => {
//         console.log(err);
//     });

// })

// app.get('/add_product', (req,res) => {
//     // let username = req.body.username;
//     // let name = req.body.name;
//     const product = new Product({
//         name: 'Fancy Wall Clock',
//         picture: 'url',
//         price: 1000,
//         dimensions: '4x4',
//         color: 'Black',
//         description: 'This is the black wall',
//         category: 'Clocks'
//     });

//     product.save()
//     .then ((res) => {
//         console.log(res);
//     })
//     .catch ((err) => {
//         console.log(err);
//     });

// })

// app.get('/discount', (req,res) => {
//     // let username = req.body.username;
//     // let name = req.body.name;
//     const discount = new Discount({
//         percentage: 50,
//         used: 10,
//         active: 5
//     });

//     discount.save()
//     .then ((res) => {
//         console.log(res);
//     })
//     .catch ((err) => {
//         console.log(err);
//     });

// })

app.get('/cart', (req,res) => {
    // let username = req.body.username;
    // let name = req.body.name;
    const cart = new Cart({
        customer_username: 'Mahad123',
        product_name: 'Black Clock',
        quantity: 2
    });

    cart.save()
    .then ((res) => {
        console.log(res);
    })
    .catch ((err) => {
        console.log(err);
    });

})

// api call to view the data in array of objects
// app.post('/login', (req,res) =>{
//     Customer.find()
//       .then((res) => {
//           res.map(cus => {
//               console.log(cus.name);
//           })
          
//       })
//       .catch((err) => {
//           console.log(err);
//       });
// })
