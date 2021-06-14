import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/UserProfile.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

function Appointments() {

    return(
        <div class="">
            <h1>All Appointments</h1>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
  }

export default Appointments;