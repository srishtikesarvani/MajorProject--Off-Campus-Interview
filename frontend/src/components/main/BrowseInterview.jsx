import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    return browseinterview.map((interview) => {
      return (
        <div className="col-md-6">
          <div className="card  " >
          {/* <img className='card-img' src={} alt="" /> */}
          <div className="card-body">
            <h4>{interview.designation}</h4>
            <h5>{interview.company.name}</h5>
            <p>{interview.name}</p>
            <p>{interview.location}</p>
            <h6>{interview.requirement}</h6>
            <p>{interview.createdat}</p>
            <Link className="btn btn-primary mt-3" to={'/main/interviewdetail/'+interview._id}>View Details</Link>
          </div>
        </div>
        </div>
      );
    });
  };

  return (
    <div className="class1">
      <div className="main vh-100">
        <header>
          <div className="container-fluid  mt-5">
          <div className="container pt-4">
            <h3 className="text-center"> Browse Interview Here</h3>
          </div>
            <div className="container py-3 ">
              <div className="row justify-content-center py-3">
                <div className="col-md-8 mx-auto">
                  <div className="input-group" role="search">
                    <div className="dropdown-center">
                      <button
                        className="btn btn-primary w-100 dropdown-toggle px-4 py-2"
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
                    <input
                      className="form-control"
                      style={{ fontSize: "1.2rem", border: "1px solid grey" }}
                      type="search"
                      placeholder="Enter Company Name"
                      aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header>
          {/* <div className="container">
            <h3 className="text-center py-5"> Browse Interview Here</h3>
          </div> */}
        </header>
        <div className="container ">
          <div className="row gy-4 mx-auto">
            {/* <div className="col-md-3"></div> */}
            {/* <div className="col-md-6 ">{displaybrowseinterview()}</div> */}
            {displaybrowseinterview()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseInterview;
