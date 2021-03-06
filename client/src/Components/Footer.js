import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css'

function Footer() {
    return (
        <footer class="mt-5">
        <div class="container-fluid bg-faded mt-5">
            <div class="container">
            <div class="row py-3">
                {/* <!-- footer column 1 start --> */}
                {/* <!-- footer column 2 start --> */}
                <div class="col-md-6">
                {/* <!-- row start --> */}
                <div class="row py-2">
                    <div class="col-sm-3 hidden-md-down">
                    <a class="bg-circle bg-info" href="#">
                        <i class="fa fa-2x fa-fw fa-address-card" aria-hidden="true "></i>
                    </a>
                    </div>
                    <div class="col-sm-9">
                    <h4>Contact us</h4>
                    <p>Why not?</p>
                    </div>
                </div>
                {/* <!-- row end -->
                <!-- row start --> */}
                <div class="row py-2">
                    <div class="col-sm-3 hidden-md-down">
                    <a class="bg-circle bg-info" href="#">
                        <i class="fa fa-2x fa-fw fa-laptop" aria-hidden="true "></i>
                    </a>
                    </div>
                    <div class="col-sm-9">
                    <h4>Cookie policy</h4>
                    <p class=" ">We use <a class=" " href="/# ">cookies </a></p>
                    </div>
                </div>
                {/* <!-- row end --> */}
                </div>
                {/* <!-- footer column 2 end -->
                <!-- footer column 3 start --> */}
                <div class="col-md-4">
                {/* <!-- row starting  --> */}
                <div class="row py-2">
                    <div class="col-sm-3 hidden-md-down">
                    <a class="bg-circle bg-danger" href="# ">
                        <i class="fa fa-2x fa-fw fa-file-pdf-o" aria-hidden="true "></i>
                    </a>
                    </div>
                    <div class="col-sm-9">
                    <h4>Download pdf</h4>
                    <p> You like print?</p>

                    </div>
                </div>
                {/* <!-- row ended -->
                <!-- row starting  --> */}
                <div class="row py-2">
                    <div class="col-sm-3 hidden-md-down">
                    <a class="bg-circle bg-info" href="https://twitter.com/ ">
                        <i class="fa fa-2x fa-fw fa-info" aria-hidden="true "></i>
                    </a>
                    </div>
                    <div class="col-sm-9">
                    <h4>Info</h4>
                    About us.
                    </div>
                </div>
                {/* <!-- row ended --> */}
                </div>
                {/* <!-- footer column 3 end --> */}
            </div>
            </div>
        </div>


        <div class="container-fluid bg-primary py-3">
            <div class="container">
            <div class="row py-3">
                <div class="col-md-9">
                <p class="text-white">Footer...</p>
                </div>
                <div class="col-md-3">
                <div class="d-inline-block">
                    <div class="bg-circle-outline d-inline-block">
                    <a href="https://www.facebook.com/" class="text-white"><i class="fa fa-2x fa-fw fa-facebook"></i>
                </a>
                    </div>

                    <div class="bg-circle-outline d-inline-block">
                    <a href="https://twitter.com/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-twitter"></i></a>
                    </div>

                    <div class="bg-circle-outline d-inline-block">
                    <a href="https://www.linkedin.com/company/" class="text-white">
                        <i class="fa fa-2x fa-fw fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        );
    }
  
  export default Footer;