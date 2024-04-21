import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrowseInterview = () => {
  const [browseinterview, setbrowseinterview] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const { job } = useParams();

  const fetchbrowseinterviewData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    if (job) {
      setbrowseinterview(
        data.filter((interview) =>
          interview.designation.toLowerCase().includes(job.toLowerCase())
        )
      );
    } else {
      setbrowseinterview(data);
    }
    setMasterList(data);
  };
  useEffect(() => {
    fetchbrowseinterviewData();
  }, []);

  const searchInterview = (e) => {
    const value = e.target.value;
    setbrowseinterview(
      masterList.filter((interview) =>
        interview.designation.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const displaybrowseinterview = () => {
    return browseinterview.map((interview) => {
      return (
        <div className="col-md-6">
          <div className="card  " style={{ backgroundColor: "#ffffff91" }}>
            {/* <img className='card-img' src={} alt="" /> */}
            <div className="card-body ">
              <h4>{interview.designation}</h4>
              <h5>{interview.company.name}</h5>
              <p>{interview.name}</p>
              <p>{interview.location}</p>
              <h6>{interview.requirement}</h6>
              <p>{interview.createdat}</p>
              <Link
                className="btn btn-primary mt-3"
                to={"/main/interviewdetail/" + interview._id}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="class2">
      <div className="main ">
        <header>
          <div className="container-fluid  ">
            <div className="container pt-4">
              <h3 className="text-center text-light pt-3">
                {" "}
                Browse Interview Here
              </h3>
            </div>
            <div className="container py-3 ">
              <div className="row justify-content-center py-3">
                <div className="col-md-8 mx-auto">
                  <div className="input-group mb-3" role="search">
                    {/* <div className="dropdown-center">
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
                    </div> */}
                    <input
                      className="form-control p-3"
                      style={{
                        fontSize: "1.2rem",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }}
                      type="search"
                      placeholder="Enter Designation......"
                      aria-label="Search"
                      onChange={searchInterview}
                    />
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    >
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
