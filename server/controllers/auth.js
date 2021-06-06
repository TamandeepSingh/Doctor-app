const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

exports.register = (req, res) =>{
    console.log(req.body)
    // res.send("form submitted");

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const phoneNumber = req.body.phoneNumber;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    db.query('SELECT Patient_email from Patient WHERE Patient_email = ?' ,[email], async (error, result) =>{
        if(error){
            console.log("Error: ", error);
        }

        if(result.length > 0){
            return res.send({ resultMessage: "The email is already is in use" });
        }else if(password !== confirmPassword){
            return res.send({ resultMessage: "Password does not match" });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log("hashed pass : ", hashedPassword);


        db.query('INSERT INTO Patient SET ? ', { Patient_email:email, Patient_FirstName: firstName, Patient_LastName: lastName, Patient_DateOfBirth: dob, Patient_Sex: gender, Patient_Password: hashedPassword, Patient_PhoneNumber: phoneNumber, email_verify:"yes"}, (error, result) => {
            if(error){
                console.log("Error: ", error);
            }else{
                console.log("result ",result)
                return res.send({ resultMessage: "Registered"  })
            }
        });


    });

    // res.send("form submitted");
}


exports.login = (req, res) =>{
    console.log(req.body)

    const email = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM Patient WHERE Patient_email = ?' , [email], async (error, result) =>{

        if(error){
            console.log("Error : ", error);
        }

        // if(!email || !)
        if( !result || !( await bcrypt.compare(password , result[0].Patient_Password))){
            return res.send({
                resultMessage: "Email or password is incorrect"
            })
        }else{
            console.log("Logged in ")

            const id = result[0].Patient_Id;
            console.log(id);

        }



    })
}
