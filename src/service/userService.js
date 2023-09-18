import bcrypt from "bcryptjs";
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'jwt'
 })

const hashUserPassword = (userPassword) =>{
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email,password,username) =>{
    let hashPass = hashUserPassword(password);
    
    connection.query(
        'INSERT INTO users (email,password,username) VALUES (?,?,?)',[email,hashPass,username],
        function(err, results){
           if(err) {
              console.log(err);
           }
           console.log(results);
        }
     )
}

const getUserList = () =>{
    let users = [];

    connection.query(
        'Select * from users',
        function(err, results){
           if(err) {
              console.log(err);
           }
           console.log("list",results);
        }
     )
}

module.exports = {
    createNewUser,
    hashUserPassword,
    getUserList
}