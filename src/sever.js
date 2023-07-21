// const express = require('express')
import express from 'express';
// import configViewEngine from './configs/viewEngine';
// import path from 'path';
const path = require('path');
const app = express()
const port = 2101

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const exphbs = require('express-handlebars')
const handlebars = exphbs.create({
    extname: '.hbs'
});


app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

//khoi tao router
const router = require('./routers/routers')
router(app)

const routerD = require('./routers/routerData')
routerD(app)





// app.listen(port,function(){}); ()=> giống cái dưới chỉ khác các viết function
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})