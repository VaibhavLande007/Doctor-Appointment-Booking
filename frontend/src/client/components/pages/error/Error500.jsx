import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { error500 } from "../../imagepath";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Error500 = (props) => {
  return (
    <div>
      <>
        {/* Error 500 */}
        <div className="container-fluid p-0">
          <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
              <div className="col-lg-8 col-md-12 text-center">
                <div className="error-info">
                  <div className="error-404-img">
                    <ImageWithBasePath
                      src="assets/img/error-500.png"
                      className="img-fluid"
                      alt="error-500-image"
                    />
                    <div className="error-content">
                      <h5 className="mb-2">Oops! That Page Can’t Be Found.</h5>
                      <p>The page you are looking for was never existed.</p>
                      <Link
                        to="/home"
                        className="btn btn-primary-gradient btn-sm"
                      >
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Error 500 */}
      </>

    </div>
  );
};

export default Error500;
