import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ExamInfo.css'

function CanadaExamInfo() {
    return (
      <div className="banner-canadaExamInfo" >
          <h1>Canada Immigration Medical Examination</h1>
          <p>We are honoured to be one of the Panel Physicians performing <br />IMMIGRATION MEDICAL EXAMs or VISA EXTENSION EXAMs for IRCC Canada</p>
          <a href="/bookAppointment" ><button type="button" class="btn btn-primary">Book Appointment</button></a>
      </div>
    );
  }

export default CanadaExamInfo;