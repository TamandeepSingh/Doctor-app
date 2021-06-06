import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css'

function RegisterAccount() {

    return(
        <div class="login-form">
            <form action="/auth/register" method="post">
                <h2 class="text-center">Register new account</h2>       
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                </div>

                <div class="form-group">
                    <input type="text" name="firstName" class="form-control" placeholder="First Name" required="required" />
                </div>

                <div class="form-group">
                    <input type="text" name="lastName" class="form-control" placeholder="Last Name" required="required" />
                </div>

                <div class="form-group">
                    <label for="start">Date of Birth : </label>
                    <input type="date" name="dob" class="form-control" id="start" />
                </div>

                <div class="form-group">
                    <select class="form-control" id="selGender" name="gender">
                        <option>Select Gender</option>
                        <option value="male" >Male</option>
                        <option value="female" >Female</option>
                        <option value="others" >Others</option>
                    </select>
                </div>

                <div class="form-group">
                    <input type="tel" name="phoneNumber" class="form-control" placeholder="Phone Number" required="required" maxlength="10" size="10" />
                </div>

                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" name="confirmPassword" class="form-control" placeholder="Confirm Password" required="required" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                </div>      
            </form>
        </div>
    );
  }

export default RegisterAccount;