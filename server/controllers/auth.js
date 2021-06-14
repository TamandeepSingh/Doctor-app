const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {promisify}= require('util');

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

            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            } )
            
            console.log("token : ", token);

            const cookieOptions = {
                expires : new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000 // cookiw time converted in milli seconds
                ),
                httpOnly: true
            }

            res.cookie('jwt', token, cookieOptions);
            res.status(200).redirect("/");
        }



    })
}

exports.isLoggedIn = async (req, res) => {
    // console.log("herererer", req);
    console.log("cookies :", req.cookies);

    // if else, check the cookies and decode the cookies, if true, then send success result. else not logged in .

    if(req.cookies.jwt){
        try{
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            console.log("decoded : ",decoded);
            db.query('SELECT * from Patient WHERE Patient_Id = ?', [decoded.id], async (error, result) =>{
                if(error){
                    console.log("error in query :" , error);
                }

                if(result){
                    console.log(result);
                    res.status(200).send({
                        loginMessage: "Welcome, user logged in"
                    });
                }
            });

        }catch(error){
            console.log("err in catch : ",error)
        }
    }
    
}


exports.logOut = async (req, res) => {

    const cookieOptions = {
        expires : new Date(
            Date.now() +  1 * 1000// cookiw time converted in milli seconds
        ),
        httpOnly: true
    }

    res.cookie('jwt', 'logout', cookieOptions);
    res.status(200).redirect("/");

}