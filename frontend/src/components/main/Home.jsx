import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const searchRef = useRef();

    const navigate= useNavigate();


  return (
    <div className="class2">
      <div className="main1">
        <div className="container services-item  ">
          <div className="">
            <div className="row pt-5 ">
              <div className="col-md-12 text-center ">
                <h3 className="display-4 fw-bold ">
                  Find <span className="text-light"> your </span> dream job
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
                  ref={searchRef}
                    className="form-control  p-3"
                    style={{ fontSize: "1.5rem", border: "none" }}
                    type="search"
                    placeholder="Search your job"
                    aria-label="Search"
                  />
                  <button className="btn btn-success " onClick={() => navigate('/main/browseinterview/' + searchRef.current.value)}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <div className="container">
                  <div className="row ">
                    <div className="col-md-12 text-center">
                      
                      <Link className="btn btn-success  mx-3" to={'/company/addinterview'}>Add Interview </Link>
                      <Link className="btn btn-success  mx-1" to={'/main/browseinterview'}> BrowseInterview </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid  ">
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
                              <button  className="btn btn-warning px-3 py-2 ">
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
      <div className="container-fluid  ">
        <div className="row d-flex justify-content-center align-items-center no-gutter py-4 g-0">
       
          <div className="col-md-8 mx-auto mb-4 mb-lg-0">
            <div className="card mb-3 " style={{border:'none'}}>
              {/* <div className="container"> */}
                <div className="row  g-0">
                 <div className="col-md-6 bg-success" style={{borderTopLeftRadius:'5px',borderBottomLeftRadius:'5px'}}>
                  <div className="col-md-12">
                    <h6 className="text-center pt-4 text-light" style={{fontFamily:'Bungee Outline',fontSize:'6rem' }}>6</h6>
                  </div>
                  <div className="col-md-12 text-center">
                    <p className="text-center text-light">
                      Professinal in our team , build our  carporation
                    </p>
                    
                  </div>

                 </div>
                 <div className="col-md-6 mx-auto">
                  <div className="row g-0">
                  <div className="col-lg-4 col-md-3 col-sm-6 col-12  box">
                    <img src="../public/it1.jpg" className="w-100  profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-6 col-12 box">
                    <img src="../public/it2.jpg" className="w-100 profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-6 col-12 box">
                    <img src="../public/it3.png" className="w-100 profesr" alt="" style={{borderRadius:'5px'}} />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 box"> 
                    <img src="../public/it4.jpg" className="w-100 profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 box">
                    <img src="../public/it5.jpg" className="w-100 profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12 box">
                    <img src="../public/it6.jpeg" className="w-100 profesr" alt=""  style={{borderRadius:'5px'}}/>
                  </div>
                  </div>
                 </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5 ">
        <div className="row ">
          <div className="col-md-4 pt-1">
            <div className="card cr">
              <div className="imgbox">
                <img className="smimage" src="/public/career1.jpg" alt="" />
              </div>
              <div className="content">
                <h2>
                  Make it work
                </h2>
                <p>A good programmer is someone who always looks both ways before crossing a one-way street </p>
              </div>
            </div>
          </div>
        <div className="col-md-8">
        <div className="col-md-12   mx-auto  " style={{backgroundColor:'whitesmoke'}}  >
          <p className='text-center my-1 ' style={{fontSize:'30px' , fontWeight:'200'}}>Whats different when you work with us?</p>
        <div className="row gx-5" >
          <div className="col-md-12 p-5" >
            <p>When you engage our corporation for your project. you get instant access to a team of 120 technology legends including strategists, desigener, developers, quality engineers and project managers. all working togather for a comman end goal:to crreate revenue -generating more solutions for You. </p>
              <p>We may be scattered all around the world. but we all speak the same language :code.It's in our DNA. We run all projects with our inborn passion for programming.</p>
          <p>Having been onnthe market for more than 11 years. it's our hybrid model for selecting intrested student</p>
          </div>
        
        </div>
        </div>
        </div>
         
        </div>
      </div> */}
      <div className="container-fluid bg-light ">
        <div className="row">
          
            <div className="col-md-2">
             <a href="#"> <img src="/public/logor.png" alt="" className="img-fluid  pt-4" width={180} /></a>
            </div>
            <div className="col-md-3 pt-5  text-center">
            <h3>Company</h3> 
            <Link className="   footer mx-3" to={'/main/about'}>About Us </Link><br></br>
            <Link className=" footer mx-3" to={'/main/contact'}>Contact US</Link><br></br>
            <Link className=" footer mx-3" to={'/main/feedback'}>Feedback</Link>
            
            </div>
            <div className="col-md-2 pt-5 text-center">
              <h3>Services</h3>
              <p>Our Services help you move ahead inyour career, faster! Increase your Profile visibility to recuiters upto 3 times.</p>
               
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-1 mt-5 px-3">
              <img src="/public/nau.png" width={90} alt="" className="img-fluid pt-3 "/>
            </div>
            <div className="col-md-1">
              <img src="/public/aon.png" width={90} alt="" className="img-fluid pt-5"/>
            </div>
            <div className="col-md-1">
              <img src="/public/job.png" width={90} alt="" className="img-fluid pt-5"/>
            </div>
           
          </div>
        
      </div>
    </div>
  );
};

export default Home;
