import mysql from "mysql2";

const connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   database:'jwt'
})
 
 
 const handleHello = (req,res)=>{
    return res.render("home.ejs")
 }

 const handleUserPage = (req,res) =>{
    return res.render("user.ejs");
 }
 const handleCreateNewUser = (req,res) =>{
   let email = req.body.email;
   let password = req.body.password;
   let username = req.body.username;

   
   connection.query(
      'INSERT INTO users (email,password,username) VALUES (?,?,?)',[email,password,username],
      function(err, results){
         if(err) {
            console.log(err);
         }
         console.log(results);
      }
   )

   return res.send("ahhaha")
 }
 module.exports = {
    handleHello,
    handleUserPage,
    handleCreateNewUser
 }