const nodemailer = require("nodemailer");
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Customer = require('./Models/customers');
const passwordHash = require('password-hash');

const app = express();

const dbURI = 'mongodb+srv://moiz_nafey:abcd1234@cluster0.fkrxm.mongodb.net/utilities?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => app.listen(5000))
    .catch((err) => console.log(err));


app.set('view engine','ejs');

app.use(express.static('public'));
app.use(morgan('dev'));


// SENDING EMAIL CODE

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'nafeymoiz@gmail.com',
//     pass: 'blahahah.'
//   }
// });

// var mailOptions = {
//   from: 'nafeymoiz@gmail.com',
//   to: 'nafeymoiz07@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



// HASHING PASSWORDS CODE

//  var hashedPassword = passwordHash.generate('password123'); // variable contains hashed value of password
//  console.log(hashedPassword);

//  console.log(passwordHash.verify('password123',hashedPassword)); // returns true (Boolean dt)
//  console.log(passwordHash.verify('password1234',hashedPassword)); // returns false (Boolean dt)
