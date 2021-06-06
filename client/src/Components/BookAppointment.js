import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/BookAppointment.css"

function BookAppointment() {

    return (
      <div className="booking-Container" >
        
        <div className="container" >
          <h1>Book your Appointment</h1>
            <div className="row" >
              <div class="col-sm-6 btn-group btn-group-lg">
                <button type="button" class="btn btn-success">Doctor 1</button>
                <button type="button" class="btn ">Doctor 2</button>
                <button type="button" class="btn ">Doctor 3</button>
              </div>

            </div><br />
            <div className="col-sm-12" >
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="javascript:void(0);">&#8676; Previous</a></li>
                <div class="col-sm-10 page-item page-link"> Week of jun, date - date  </div>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next &#8677;</a></li>
              </ul>
            </div>
              
            <div class="row date-table">

              

              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Monday, jun1</div>
                <ul class="list-group">
                  <a href="" ><li class="list-group-item list-group-item-dark">time 1</li></a>
                  <li class="list-group-item list-group-item-dark">time 2</li>
                  <li class="list-group-item list-group-item-dark">time 3 </li>
                  <li class="list-group-item list-group-item-dark">time 4</li>
                  <li class="list-group-item list-group-item-dark">time 5</li>
                  <li class="list-group-item list-group-item-dark">time 6</li>
                  <li class="list-group-item list-group-item-dark">time 7</li>
                </ul>
              </div>
              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Tuesday, jun2</div>
                  <div>No Appointments</div>
              </div>
              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Wednesday, jun3</div>
                <ul class="list-group">
                  <a href="" ><li class="list-group-item list-group-item-dark">time 1</li></a>
                  <li class="list-group-item list-group-item-dark">time 2</li>
                  <li class="list-group-item list-group-item-dark">time 3 </li>
                  <li class="list-group-item list-group-item-dark">time 4</li>
                </ul>
              </div>
              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Thursday, jun4</div>
                <div>No Appointments</div>
              </div>
              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Friday, jun5</div>
                <div>No Appointments</div>
              </div>
              <div class="col-sm-2" >
                <div className="list-group-item-dark" >Satuarday, jun6</div>
                <ul class="list-group">
                  <a href="" ><li class="list-group-item list-group-item-dark">time 1</li></a>
                  <li class="list-group-item list-group-item-dark">time 2</li>
                  
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }

export default BookAppointment;
