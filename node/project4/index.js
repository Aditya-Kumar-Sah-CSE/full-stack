// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express')
const mongoose = require("mongoose")

const app = express() //object

// const mongoose = require("mongoose")
// const Contact = require("./module/contacts.models")
import Contact from './models/contacts.models.js';


// database connection 
mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
.then(() => console.log("Database Connected."))

//middleware
app.set('view engine', 'ejs');//ejs template engine
app.use(express.urlencoded({ extended: false }));//form data
 app.use(express.static('public'));//static files

//Routes

app.get('/',(req,res) => {res.render('home')});

app.get('/show-contact',(req,res) => {res.render('show-contact')});

app.get('/add-contact',(req,res) => {res.render('add-contact')});

app.post('/add-contact',(req,res) => {});

app.get('/update-contact',(req,res) => {res.render('update-contact')});

app.post('/update-contact',(req,res) => {});

app.get('/delete-contact',(req,res) => {});

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})