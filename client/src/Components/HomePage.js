import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../Assets/medical-banner.jpg'
import '../Styles/HomePage.css'
import canadaFlag from '../Assets/canada.png'
import usaFlag from '../Assets/usa.png'
import civilAviation from '../Assets/aviation.jpeg'
import CanadaExamInfo from './CanadaExamInfo'
import { useHistory } from "react-router-dom";

function HomePage() {

    const canadaExam = () => {
        console.log("haaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        return(
            <div>
                {/* <Link to="/canadaExamInfo"></Link> */}
            </div>
        );
    }

    const history = useHistory();

    return (
      <div className="background" >
        <div className="jumbotron text-center banner">
            <div className="heading-homePage">
                <h1>Dr. Cheema</h1>
                <h2>Panel physician</h2>
                <h4>Medical Examination for CIC Canada</h4>
            </div>

            </div>
            
            <div className="container">
            <div className="row services">
                <div className="col-3 text-center">
                    <img src={canadaFlag} ></img>
                    <h3>Canada Immigration Medical Exam</h3>
                    <button type="button" className="btn btn-dark" onClick={() => history.push('/canadaExamInfo')} >Know more</button>
                    
                </div>
                <div className="col-3 text-center">
                    <img src={usaFlag} ></img>
                    <h3>USA Immigration Medical Exam</h3>
                    <button type="button" className="btn btn-dark">Know more</button>
                </div>
                <div className="col-3 text-center">
                    <img src={civilAviation} ></img>
                    <h3>Civil Aviation Medical Exam</h3>
                    <button type="button" className="btn btn-dark" >Know more</button>
                </div>
            </div>
        </div>

      </div>
    );
  }

export default HomePage;