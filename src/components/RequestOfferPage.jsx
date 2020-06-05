import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/send-logo.png';

import '../styles/App.css';

function RequestOfferPage() {
  return (
    <>
      <div class="">
        <nav class="shadow-sm py-3 navbar navbar-expand navbar-light bg-light fixed-top">
          <Link class="ml-5 navbar-brand" to="#home">
            <img alt="" height="25" src={LogoImage} />
          </Link>
        </nav>
        <div>
          <div class="bg-primary-light container-fluid">
            <div class="pt-8 container">
              <div class="justify-content-center row">
                <div class="col-md-10">
                  <div class="my-card card">
                    <div class="font-weight-bold py-5 bg-white card-header">
                      <h4 class="font-weight-bold">
                        What products do you offer?
                      </h4>
                      <p class="font-weight-light mb-0">
                        Select all that applies
                      </p>
                    </div>
                    <div class="card-body">
                      <div role="group" class="my-2 row justify-content-center btn-group btn-group-toggle">
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Respirators<span class="ml-2 text-paragraph font-weight-light">Surgical N95 or equivalent</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Respirators<span class="ml-2 text-paragraph font-weight-light">N95 or equivalent</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Respirators<span class="ml-2 text-paragraph font-weight-light">KN95 or equivalent</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Gowns<span class="ml-2 text-paragraph font-weight-light">PB70</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Examination Gloves<span class="ml-2 text-paragraph font-weight-light">Powder-free nitrile <br />(ASTM D6319)</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Examination Gloves <span class="ml-2 text-paragraph font-weight-light">Powder-free nitrile<br /> (ASTM D3578)</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Facial Shields<span class="ml-2 text-paragraph font-weight-light">ANSI Z87.1</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Hand Sanitizer<span class="ml-2 text-paragraph font-weight-light"></span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Disinfecting wipes<span class="ml-2 text-paragraph font-weight-light">EPA Certified</span>
                          </p>
                        </label>
                        <label class="btn-custom py-3 text-left mb-3 col-md-5 mx-2 rounded btn btn-light">
                          <input type="checkbox" autocomplete="off" value="[object Object]" />
                          <p class="m-0 font-weight-bold">
                            Surgical Masks<span class="ml-2 text-paragraph font-weight-light"></span>
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <Link  to="/contact-info" type="button" class="font-weight-bold py-3 px-4 my-4 float-right btn btn-primary">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestOfferPage;
