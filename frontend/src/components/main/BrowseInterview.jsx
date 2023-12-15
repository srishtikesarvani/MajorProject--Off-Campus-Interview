import React, { useEffect, useState } from "react";

const BrowseInterview = () => {
  const [browseinterview, setbrowseinterview] = useState([]);

  const fetchbrowseinterviewData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setbrowseinterview(data);
  };
  useEffect(() => {
    fetchbrowseinterviewData();
  }, []);
  const displaybrowseinterview = () => {
    return browseinterview.map((browseinterview) => {
      return (
        <div className="card  " style={{border:'none'}}>
          {/* <img className='card-img' src={} alt="" /> */}
          <div className="card-body">
            <h4>{browseinterview.designation}</h4>
            <h5>{browseinterview.company.name}</h5>
            <p>{browseinterview.name}</p>
            <p>{browseinterview.location}</p>
            <h6>{browseinterview.requirement}</h6>
            <p>{browseinterview.createdat}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
     
      <div className="main vh-100">
        <header>
         <div className="container-fluid  ">
         <div className="container ">
            <div className="row d-flex ">
              <div className="col-md-12">
                <div className="col-md-4">
                  <div className="dropdown-center">
                    <button
                      className="btn btn-secondary dropdown-toggle px-4 py-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Location 
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                           Lucknow   
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Agra
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delhi
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Gujrat
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Punjab
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Banglore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                 <div className="col-md-6">
                  <form className="input-group my-3  " role="search">
                    <input
                      className="form-control  p-2"
                      style={{ fontSize: "1.2rem", border: "1px solid grey" }}
                      type="search"
                      placeholder="Enter Company Name"
                      aria-label="Search"
                    />
                    <button className="btn btn-secondary" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
         </div>
        </header>
        <header>
          <div className="container">
            <h3 className="text-center py-5"> Browse Interview Here</h3>
           
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">{displaybrowseinterview()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseInterview;
