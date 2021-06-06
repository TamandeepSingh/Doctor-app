import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Login() {

    return(
        <div class="login-form">
            <form action="/auth/login" method="post">
                <h2 class="text-center">Log in</h2>       
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Log in</button>
                </div>
                <div class="clearfix">
                    
                    <a href="#" class="float-right">Forgot Password?</a>
                </div>        
            </form>
            <Link  className="text-center" to="/registerAccount">Register an Account</Link>
        </div>
    );
  }

export default Login;