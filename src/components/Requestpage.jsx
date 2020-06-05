import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/send-logo.png';

import '../styles/App.css';

function Requestpage() {
  return (
    <>
      <div className="">
        <nav className="shadow-sm py-3 navbar navbar-expand navbar-light bg-light fixed-top">
          <Link to="#home" className="ml-5 navbar-brand">
            <img alt="" height="25" src={LogoImage} />
          </Link>
        </nav>
        <div className="bg-primary-light container-fluid">
          <div className="py-8 container">
            <div className="text-center">
              <h4 className="mb-4 font-weight-bold">
                Welcome!
              </h4>
              <h4 className="mb-3">
                Here are the next steps:
              </h4>
            </div>
            <div className="justify-content-center mb-5 row">
              <div className="my-card py-5 px-5 text-center bg-white m-3 col-md-4">
                <h5 className="my-3 font-weight-bold">
                  Sign up
                </h5>
                <p>
                  Create an account and complete your request in less than 3 minutes.
                </p>
              </div>
              <div className="my-card py-5 px-5 text-center bg-white m-3 col-md-4">
                <h5 className="my-3 font-weight-bold">
                  Match with suppliers
                </h5>
                <p>
                  After completing your request, we’ll notify relevant suppliers to start bidding.
                </p>
              </div>
              </div>
                <div className="text-center">
                  <Link to="/request-offer" type="button" className="font-weight-bold btn btn-primary px-7">
                    Start
                  </Link>
                </div>
              </div>
            </div>
          <div>
        </div>
      </div>
    </>
  )
}

export default Requestpage;
