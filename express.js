const express = require("express")
const nunjucks = require("nunjucks")
const session = require('express-session')
const Memorystroe = require('memorystore')(session)
const router = require('./routes/index.js')
const app = express()

app.set("view engine", "html")
nunjucks.configure("./views", {
    express: app,
    watch: true
})

let maxAge = 5*6*1000

app.use(session({
    secret: "wegf6124@#$@#!",
    resave: false,
    saveUninitialized: true,
    store: new Memorystroe({ checkPeriod: maxAge }),
    // checkPeriodL 서버쪽 세션의 유통기한
    cookie: {
        maxAge: maxAge
    }
    // 브라우저 쿠키의 유효기간
}))

app.use(express.urlencoded({extended: true}))

app.use(router)


app.listen(3000, ()=>{
    console.log("server onload")
})