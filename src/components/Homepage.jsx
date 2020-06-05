import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/send-logo.png';
import HeroImage from '../assets/images/hero-image.png';
import UberFreightImage from '../assets/images/uber-freight.png';
import C9Image from '../assets/images/C9.png';
import Respirators from '../assets/images/respirators.png';
import Gloves from '../assets/images/gloves.png';
import FaceShields from '../assets/images/face-shield.png';
import Sanitizers from '../assets/images/sanitizers.png';
import Ventilators from '../assets/images/ventilators.png';
import Marks from '../assets/images/masks.png';
import Wipes from '../assets/images/wipes.png';
import Gowns from '../assets/images/gowns.png';
import StepOne from '../assets/images/step-one.svg';
import StepTwo from '../assets/images/step-two.svg';
import StepThree from '../assets/images/step-three.svg';
import StepFour from '../assets/images/step-four.svg';

import '../styles/App.css';

function Homepage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      
        <Link className="navbar-brand" to="#">
          <img alt="" src={LogoImage} id="logo-image" />
        </Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="mx-auto navbar-nav" id="navbar-info">
            <Link className="nav-item nav-link" to="#">Group Purchasing</Link>
            <Link className="nav-item nav-link" to="#">About</Link>
            <Link className="nav-item nav-link" to="#">Contact Us</Link>
          </div>

          <form className="form-inline">
            <button type="button" className="ml-2 font-weight-bold btn btn-link">
              Login
            </button>
            <button type="button" className="ml-2 font-weight-bold btn btn-red">
              Request
            </button>
            <button type="button" className="ml-2 font-weight-bold btn btn-primary">
              Supply
            </button>
          </form>
        </div>
      </nav>

      <div className="height-100 mt-5 container">
        <div className="h-100 align-items-center row">
          <div className="col-md-6">
            <h6 className="text-primary mb-4 font-weight-bold lp-1">
              LIFESAVING PROCUREMENT
            </h6>
            <h1 className="mb-5 font-weight-bold">
              Sourcing for COVID-19
            </h1>
            <h3 className="mb-4 font-weight-lighter text-paragraph">
              Response connects healthcare providers to medical suppliers with a sourcing platform built to accelerate emergency procurement
            </h3>
            <Link to="/request" className="font-weight-bold mb-4 px-5 py-3 btn btn-red">
              Request Medical Equipment
            </Link>
            <p>
              Questions? <span>Talk to us.</span>
            </p>
          </div>
          <div className="col-md-6">
            <img alt="" className="img-fluid" src={HeroImage} />
          </div>
        </div>
      </div>

      <div className="text-white bg-primary py-3 container-fluid">
        <div className="align-items-center justify-content-center row">
          <h4 className="mb-0 mr-4 font-weight-light">
            Have Supplies?
          </h4>
          <Link to="/request" className="btn btn-outline-light px-4 py-3 font-weight-bold">
            Supply Medical Equipment
          </Link>
        </div>
      </div>

      <div className="text-white py-5 bg-primary-light container-fluid">
        <div className="align-items-center justify-content-center row">
          <h6 className="mb-0 mr-4 font-weight-bold text-paragraph lp-1">
            PARTNERS
          </h6>
          <img className="mr-3 filter" height="20" alt="" src={UberFreightImage} />
          <img className="mr-3 filter" height="20" alt="" src={C9Image} />
        </div>
      </div>

      <div className="py-6 bg-primary-light container-fluid">
        <div className="align-items-center justify-content-center row">
          <div className="text-center col">
            <h1 className="mb-5 font-weight-bold">
              Millions of units in  <br />
              medical equipment ready to go
            </h1>
            <h3 className="mb-4 font-weight-light text-paragraph">
              We're working with manufacturers producing 
              <br />
              millions of high demand products per week.
            </h3>
            <div className="d-flex justify-content-center my-6 flex-wrap">
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Respirators} alt="" />
                <p>Respirators</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Gloves} alt="" />
                <p>Glove</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={FaceShields} alt="" />
                <p>Face Shields</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Sanitizers} alt="" />
                <p>Sanitizers</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Ventilators} alt="" />
                <p>Ventilators</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Marks} alt="" />
                <p>Masks</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Wipes} alt="" />
                <p>Wipes</p>
              </div>
              <div className="mx-1 mx-lg-5">
                <img height="60" className="mb-1" src={Gowns} alt="" />
                <p>Gowns</p>
              </div>
            </div>
            <div className="d-inline-flex bg-paragraph-light px-4 py-3 text-primary rounded">
              <h5 className="mb-0 font-weight-bold">
                25+ More Classes of Goods Coming Soon
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 container">
        <div className="text-center">
          <h2 className="font-weight-bold text-primary mb-7">
            How it Works
          </h2>
        </div>
        <div className="mb-10 align-items-center row">
          <div className="col-md-6">
            <h6 className="text-primary mb-4 font-weight-bold lp-1">
              STEP ONE
            </h6>
            <h1 className="mb-5 font-weight-bold">
              Post compliant requests <br /> in minutes
            </h1>
            <h4 className="mb-4 font-weight-light text-paragraph">
              Tell us what you need and Response uses your terms to generate all the necessary paperwork.
            </h4>
          </div>
          <div className="col-md-6">
            <img alt="" className="img-fluid mt-3 mt-md-0" src={StepOne} />
          </div>
        </div>
        <div className="mb-10 align-items-center row">
          <div className="col-md-6">
            <h6 className="text-primary mb-4 font-weight-bold lp-1">
              STEP TWO
            </h6>
            <h1 className="mb-5 font-weight-bold">
            Match with suppliers you <br /> can trust
            </h1>
            <h4 className="mb-4 font-weight-light text-paragraph">
            Response instantly notifies the most relevant suppliers based on your request.
            </h4>
          </div>
          <div className="col-md-6">
            <img alt="" className="img-fluid  mt-3 mt-md-0" src={StepTwo} />
          </div>
        </div>
        <div className="mb-10 align-items-center row">
          <div className="col-md-6">
            <h6 className="text-primary mb-4 font-weight-bold lp-1">
              STEP THREE
            </h6>
            <h1 className="mb-5 font-weight-bold">
              Pick the best offer
            </h1>
            <h4 className="mb-4 font-weight-light text-paragraph">
              We automatically collect and score the best offers based on quality, lead time, and price.
            </h4>
          </div>
          <div className="col-md-6">
            <img alt="" className="img-fluid  mt-3 mt-md-0" src={StepThree} />
          </div>
          </div>
          <div className="mb-6 align-items-center row">
            <div className="col-md-6">
              <h6 className="text-primary mb-4 font-weight-bold lp-1">
                STEP FOUR
              </h6>
              <h1 className="mb-5 font-weight-bold">
                Get your supplies
              </h1>
              <h4 className="mb-4 font-weight-light text-paragraph">
                Response is designed to make emergency procurement easy and fast, so that you can get back to the work that really matters - fighting COVID-19.
              </h4>
            </div>
            <div className="col-md-6">
              <img alt="" className="img-fluid  mt-3 mt-md-0" src={StepFour} />
            </div>
          </div>
        <div className="text-center">
          <button type="button" className="font-weight-bold mb-4 px-5 py-3 btn btn-red">
            Request Medical Equipment
          </button>
        </div>
      </div>

      <div className="py-5 mb-6 bg-blue-bg rounded container">
        <div className="col-md-12">
          <h6 className="text-primary mb-4 font-weight-bold lp-1">
            ABOUT US
          </h6>
          <h1 className="mb-4 font-weight-bold">
            We’re focused on accelerating the delivery of life saving medical supplies during COVID-19
          </h1>
          <button type="button" className="font-weight-bold px-0 btn btn-link">
            Learn more about our mission and who we are -&gt;
          </button>
        </div>
      </div>

      <div className="py-6 bg-primary-light container-fluid">
        <div className="align-items-center justify-content-center row">
          <div className="text-center col">
            <h1 className="mb-5 font-weight-bold text-primary">
              Get Involved
            </h1>
            <h4 className="mb-0 font-weight-light text-paragraph">
              Join our community for the latest technical specifications, verified <br /> suppliers data, and tools to help manage this global health pandemic.
            </h4>
            <form className="my-5 form-inline">
              <div className="mx-auto row">
                <div className="col-md-12">
                  <input placeholder="Your Email" type="text" className="rounded-0 border-primary form-control form-control-lg" />
                    <button type="button" className="rounded-0 btn btn-primary btn-lg">
                      Sign Up
                    </button>
                  </div>
                </div>
            </form>
            <p className="text-paragraph">
              We care about protecting your data. Read our 
              <Link to="/">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="py-7 container">
        <div className="row no-gutters">
          <div className="d-flex flex-column justify-content-between col-md-4">
            <div>
              <img alt="" className="mb-4 mb-md-0" height="30" src={LogoImage} />
          </div>
          <p className="text-muted">
            © 2020 Response Inc.
          </p>
        </div>
        <div className="col-md-2 col-6">
          <div className="flex-column nav">
            <span className="mb-2 navbar-text">
              Product
            </span>
            <Link to="#" data-rb-event-key="link-1" className="pl-0 pb-0 nav-link" role="button">
              Features
            </Link>
          </div>
        </div>
        <div className="col-md-2 col-6">
          <div className="flex-column nav">
            <span className="mb-2 navbar-text">
              Legal
            </span>
            <Link to="#" data-rb-event-key="link-1" className="pl-0 pb-0 nav-link" role="button">
              Terms
            </Link>
            <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
              Privacy
            </Link>
          </div>
        </div>
        <div className="mt-5 mt-md-0 col-md-2 col-6"><div className="flex-column nav">
          <span className="mb-2 navbar-text">
          Company
          </span>
          <Link to="#" data-rb-event-key="link-1" className="pl-0 pb-0 nav-link" role="button">
          About
          </Link>
          <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
            Contact Us
          </Link>
          <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
            +1 (844) 966-1910</Link>
        </div>
        </div>
          <div className="mt-5 mt-md-0 col-md-2 col-6">
            <div className="flex-column nav">
              <span className="mb-2 navbar-text">
                Follow Us
              </span>
              <Link to="#" data-rb-event-key="link-1" className="pl-0 pb-0 nav-link" role="button">
                Linkedin
              </Link>
              <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
                Facebook
              </Link>
              <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
                Twitter
              </Link>
              <Link to="#" data-rb-event-key="link-2" className="pl-0 pb-0 nav-link" role="button">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
