import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="main1">
        <div className="container services-item  ">
          <div className="py-5 ">
            <div className="row pt-5 ">
              <div className="col-md-12 text-center ">
                <h3 className="display-4 fw-bold ">
                  Find <span className="text-success"> your </span> dream job
                  now
                </h3>
                <p style={{ fontSize: "1.8rem" }}>
                  5 lakh+ jobs for you to explore{" "}
                </p>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-8 mb-5">
                <form className="input-group my-3  " role="search">
                  <input
                    className="form-control  p-3"
                    style={{ fontSize: "1.5rem", border: "none" }}
                    type="search"
                    placeholder="Search your job"
                    aria-label="Search"
                  />
                  <button className="btn btn-success " type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12 text-center">
                      <Link className="btn btn-success  " to={'/main/companylogin'}> Company Login</Link>
                      <Link className="btn btn-success  mx-3" to={'/company/addinterview'}>Add Interview </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 ">
        <h4 className="display-6 fw-bold text-dark text-center pt-4 pb-3 ">
          Top companies hiring now
        </h4>
        <div className="row ">
          <div className="col-sm-12 ">
            <div
              id="carouselExample"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/wipro.png"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">Wipro</h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                3.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                Trusted global solutions company.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/tcs.png"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">TCS</h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                4.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                Software development & technology services firm.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/shoclu.png"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">
                                ShopClues
                              </h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>{" "}
                                4.6k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                Helps to grow eCommerce bussiness grow rapidly.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/lenskart.jpg"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">
                                Lenskart
                              </h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                2.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                Indian multinational prescription optical chain.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container">
                    <div className="row">
                     

                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/dream11.jpg"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">
                                {" "}
                                Dream11
                              </h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>{" "}
                                3.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                It is a indian fantacy sport plateform.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/IAS.jpg"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">
                                {" "}
                                 IAS
                              </h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>
                                <i className="fa fa-star text-warning"></i>{" "}
                                3.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                It is a indian fantacy sport plateform.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/hcl.png"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-4 mt-2"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">HCL</h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                1.4k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                IT solution company.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3">
                        <div className="card w-100" style={{ width: "300px" }}>
                          <img
                            src="../public/proeves.webp"
                            alt=""
                            className="card-img-top pt-4 img-fluid card-img"
                          />
                          <div className="card-body">
                            <div
                              className="services-item bg-light p-3"
                              style={{ borderRadius: "10px" }}
                            >
                              <h3 className="card-title text-center">
                                {" "}
                                ProEves
                              </h3>
                              <p className="text-center">
                                {" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                <i className="fa fa-star text-warning"></i>{" "}
                                2.9k+ review{" "}
                              </p>
                              <p className="card-text text-center">
                                {" "}
                                Early childhood care & educaton made easy.
                              </p>
                            </div>
                            <div className="text-center mt-3">
                              <button className="btn btn-warning px-3 py-2 ">
                                View job
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <>
                <button
                  className="carousel-control-prev "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden text-success">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
      <h4 className="display-6 fw-bold text-dark text-center pt-4 pb-3 ">
          A team united by shared value
        </h4>
      <div className="container-fluid services-item bg-light ">
        <div className="row d-flex justify-content-center align-items-center no-gutter py-5 g-0">
       
          <div className="col-md-10 mb-4 mb-lg-0">
            <div className="card mb-3 " style={{border:'none'}}>
              {/* <div className="container"> */}
                <div className="row  g-0">
                 <div className="col-md-4 bg-success">
                  <div className="col-md-12">
                    <h6 className="text-center pt-4 text-light" style={{fontFamily:'Bungee Outline',fontSize:'6rem' }}>6</h6>
                  </div>
                  <div className="col-md-12 text-center">
                    <p className="text-center text-light">
                      Professinal in our team , build our  carporation
                    </p>
                    
                  </div>

                 </div>
                 <div className="col-md-8">
                  <div className="row g-0">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src="../public/it1.jpg" className="img-fluid  profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src="../public/it2.jpg" className="img-fluid profesro" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src="../public/it3.png" className="img-fluid profesr" alt="" style={{borderRadius:'5px'}} />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12"> 
                    <img src="../public/it4.jpg" className="img-fluid profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src="../public/it5.jpg" className="img-fluid profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src="../public/it6.jpeg" className="img-fluid profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  </div>
                 </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
