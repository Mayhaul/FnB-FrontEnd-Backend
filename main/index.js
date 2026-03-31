const path = require("path");
const express = require("../backend/node_modules/express");

const app = express();
const port = 8080;

// configured EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../backend/views"));

app.listen(port,()=>{
    console.log(`Listening on ${port} :)`);
});

app.get("/",(req,res)=>{
    console.log("You are at the home page");
    res.render("home",{user: "Mehul Daddy"});
});

app.get("/home",(req,res)=>{
    console.log("You are at the home page");
    res.render("home",{user: "Mehul Daddy"});
});

app.get("/login",(req,res)=>{
    console.log("You are at the login page");
    res.render("login", {user: "Mehul Daddy"});
});

app.post('/login',(req,res)=>{
    // currentUser = req.body.username;
    res.redirect("/");
});

app.get("/profile",(req,res)=>{
    console.log("You are at the profile page");
    res.render("profile",{user: "Mehul Daddy"});
});