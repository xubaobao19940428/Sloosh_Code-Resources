import React, { Component, Fragment, useRef } from "react";
import SliderAuth from "../../component/slider/SliderAuth";

const Register = (props) => {
  const slider1 = useRef(null);

  const previous = () => {
    slider1.current.slickNext();
  };

  const next = () => {
    slider1.current.slickPrev();
  };
  return (
    <Fragment>
      <div className="overflow-hidden">
        <section className="bg__white py-0 wrapper__wrap-auth">
          <div className="row min-height-100">
            <div className="col-md-6">
              <div className="wrapper__form-auth">
                <img
                  src="./../images/sadsad.png"
                  className="mb-4 mb-md-0 d-md-none"
                  alt=""
                />
                <h4 className="bold font__size--42 text__40-1024 text__40-md text__40-mm">Join with us now!</h4>
                <p className="meidum font__size--16 text__16-1024 color__gray-2 mb-4">
                  Vitae integer pellentesque platea ipsum tristique turpis eros,
                  ante sollicitudin. Ut sed eleifend duis morbi.{" "}
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group wrapper__fild-input">
                      <label htmlFor="" className="bold font__size--16 text__16-1024">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 semi-bold font__size--14 text__14-1024 color__gray-2"
                        placeholder="eg. John"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group wrapper__fild-input">
                      <label htmlFor="" className="bold font__size--16 text__16-1024">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 semi-bold font__size--14 text__14-1024 color__gray-2"
                        placeholder="eg Toronto"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group wrapper__fild-input">
                  <label htmlFor="" className="bold font__size--16 text__16-1024">
                    Your Email
                  </label>
                  <input
                    type="text"
                    className="form-control w-100 semi-bold font__size--14 text__14-1024 color__gray-2"
                    placeholder="Insert your email here"
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group wrapper__fild-input">
                      <label htmlFor="" className="bold font__size--16 text__16-1024">
                        Your Password
                      </label>
                      <input
                        type="password"
                        className="form-control w-100 semi-bold font__size--14 text__14-1024 color__gray-2"
                        placeholder="Insert your password here"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group wrapper__fild-input">
                      <label htmlFor="" className="bold font__size--16 text__16-1024">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control w-100 semi-bold font__size--14 text__14-1024 color__gray-2"
                        placeholder="Insert your password here"
                      />
                    </div>
                  </div>
                </div>

                <button className="btn btn__purple shadow semi-bold font__size--14 text__14-1024 color__white w-100 mb-3">
                  Sign Up
                </button>
                <a
                  href="#!"
                  className="btn btn__outlined--gray-4 no__opacity nohover h__gray-3 semi-bold font__size--14 text__14-1024 color__gray-3 text-center w-100 mb-3"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="./../images/image 1 (1).png" alt="" />
                    <span className="ml-3 semi-bold font__size--14 text__14-1024">
                      Sign in with google
                    </span>
                  </div>
                </a>

                <div className="text-center">
                  <p className="bold font__size--14 text__14-1024 mb-0 color__gray-3">
                    Already have an account?{" "}
                    <a href="#!" className="color__purple">
                      Sign in{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none position-relative d-md-flex justify-conten-center align-items-end p-4">
              <img src="./../images/Photo.png" className="path__7" alt="" />
              <div className="position-relative w-100 z-2">
                <div className="wrapper__slide-wrap-auth">
                  <div className="icon bg__purple">
                    <img src="./../images/Logo.png" className="" alt="" />
                  </div>
                  <div className="slide position-relative">
                    <div className="arrow d-flex align-items-center">
                      <div onClick={previous} className="pointer">
                        <img src="./../images/row (1).png" alt="" />
                      </div>
                      <div onClick={next} className="pointer ml-3">
                        <img src="./../images/row (2).png" alt="" />
                      </div>
                    </div>
                    <SliderAuth slider1={slider1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Register;
