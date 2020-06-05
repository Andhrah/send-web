import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/send-logo.png';

import '../styles/App.css';

function ContactInfoPage() {
  return (
    <>
      <div class="">
        <nav class="shadow-sm py-3 navbar navbar-expand navbar-light bg-light fixed-top">
          <Link to="/" class="ml-5 navbar-brand">
            <img alt="" height="25" src={LogoImage} />
          </Link>
        </nav>
        <div>
          <div>
            <div class="bg-primary-light container-fluid">
              <div class="pt-8 container">
                <div class="justify-content-center row">
                  <div class="col-md-10">
                    <div class="my-card card">
                      <div class="px-5 font-weight-bold py-5 bg-white card-header">
                        <h4 class="font-weight-bold">
                          Contact Information
                        </h4>
                      </div>
                      <div class="px-5  card-body">
                        <form class="my-5">
                          <h5 class="font-weight-bold mb-3">
                            Primary Contact
                          </h5>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>First Name</small>
                            </label>
                            <input name="firstName" placeholder="First Name" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupPassword">
                              <small>Last Name</small>
                            </label>
                            <input name="lastName" placeholder="Last Name" type="text" id="formGroupPassword" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupPassword">
                              <small>Title</small>
                            </label>
                            <input name="title" placeholder="Title" type="text" id="formGroupPassword" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupPassword">
                              <small>Email Address</small>
                            </label>
                            <input name="email" placeholder="Email" type="email" id="formGroupPassword" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupPassword">
                              <small>Phone Number</small>
                            </label>
                            <input name="phoneNumber" placeholder="Phone Number" type="tel" id="formGroupPassword" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupPassword">
                              <h5 class="font-weight-bold my-3">
                                Proof of association with organization
                              </h5>
                            </label>
                            <input name="linkUrl" placeholder="Requester Profile (LinkedIn, organization page, etc." type="url" id="formGroupPassword" class="border-paragraph-light form-control" value="" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="my-card my-5 card">
                      <div class="px-5 font-weight-bold py-5 bg-white card-header">
                        <h4 class="font-weight-bold">
                          Your Organization Information
                        </h4>
                      </div>
                      <div class="px-5  card-body">
                        <form class="my-5">
                          <h5 class="font-weight-bold mb-3">
                            Organization
                          </h5>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="theSelect">
                              <small>Organization Type</small>
                            </label>
                            <select name="orgType" id="theSelect" class="form-control">
                              <option value="" disabled="">
                                Organization Type
                              </option>
                              <option value="Supplier">
                                Supplier
                              </option>
                              <option value="Manufacturer">
                                Manufacturer
                              </option>
                              <option value="Individual">
                                Individual
                              </option>
                            </select>
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>Organization name</small>
                            </label>
                            <input name="orgName" placeholder="Organization name" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>Organization website</small>
                            </label>
                            <input name="orgWebsite" placeholder="Organization website" type="url" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <h5 class="font-weight-bold my-3">
                            Location
                          </h5>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>
                                Address Line 1
                            </small>
                            </label>
                            <input name="location1" placeholder="Street address, P.O. box, company name, c/o" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>Address Line 2</small>
                            </label>
                            <input name="location2" placeholder="Apartment, suite, unit, building, floor, etc." type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>City</small>
                            </label>
                            <input name="city" placeholder="City" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>State/Province/Region</small>
                            </label>
                            <input name="state" placeholder="State/Province/Region" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>ZIP</small>
                            </label>
                            <input name="zip" placeholder="ZIP" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                          <div class="col-md-6 px-0 form-group">
                            <label class="form-label" for="formGroupEmail">
                              <small>Country</small>
                            </label>
                            <input name="country" placeholder="Country" type="text" id="formGroupEmail" class="border-paragraph-light form-control" value="" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="my-card card">
                      <div class="px-5 font-weight-bold py-5 bg-white card-header">
                        <h4 class="font-weight-bold">
                          Terms and Conditions
                            </h4>
                      </div>
                      <div class="px-5  card-body">
                        <form class="my-5">
                          <p class="mb-3">
                            Once you submit your request, we'll securely store your information in an account to make sure we can contact you when we find a match. We’ll send you a temporary password that you can use to access your account and manage your requests.
                              </p>
                          <div class="form-group">
                            <div class="form-check">
                              <input name="terms" type="checkbox" id="formBasicCheckbox" class="form-check-input" />
                              <label for="formBasicCheckbox" class="form-check-label">
                                I hereby agree to the <span class="text-primary">Terms &amp; Conditions</span>
                              </label>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="form-check">
                              <input name="privacy" type="checkbox" id="formBasicCheckbox" class="form-check-input" />
                              <label for="formBasicCheckbox" class="form-check-label">
                                I hereby agree to the <span class="text-primary">Privacy Policy</span>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button type="button" class="font-weight-bold py-3 px-4 mt-4 mb-5 float-right btn btn-success">
                      Submit
                      </button>
                    <button type="button" class="font-weight-bold py-3 px-4 mx-4 mt-4 mb-5 float-right btn btn-secondary">
                      Back
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfoPage;
