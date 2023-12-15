import React from 'react'

const InterviewDetail = () => {
  return (
    <div>
        <div className="container  col-md-6 d-flex mx-auto align-items-center vh-75  mt-5">
            <div className="card w-100 " style={{borderRadius:'10px'}}>
             <div className="row p-3">
            <div className="col-md-12 text-secondary">
             <h6 className='text-dark fw-bold ' style={{fontSize:'30px'}}>Designation</h6>
            </div>
            <div className="col-md-12 ">
              <p className='text-secondary '  style={{fontWeight:'400'}}>Company Name <span className='px-3'> <i className="  text-warning fa fa-star" ></i>  4.6  <span className='px-3'>2 Reviews</span> </span></p>
            </div>
            <div className="col-md-6">
             <p className='text-secondary' style={{fontWeight:'400'}}> 💼 Fresher/0-1 years  <span className='px-3'>₹  <span  className='px-1'> Not Disclosed</span></span></p> 
            </div>
           <div className="col-md-12 text-secondary"> <i className="  fa fa-map-marker" ></i> <span className='px-2' style={{fontWeight:'400', fontSize:'18px'}}>Lucknow Uttar Pradesh</span> </div>

             </div>
             <div className="crad-footer " style={{borderTop:'1px solid grey'}}>
              <div className="row p-3">
                <div className="col-md-8">
                  <p className='text-secondary '>Posted: 1 day ago <span className='px-3'>Openings: 6</span> <span> Applicant: 33</span></p>
                </div>
                <div className="col-md-3">
                  <button className='btn btn-primary p-2' style={{borderRadius:'50px'}} type='submit'>  Register to apply</button>
                </div>
              </div>
             </div>
                
            </div>
            

        </div>
        <div className="container  col-md-6 d-flex mx-auto align-items-center mt-5">
        <div className="card w-100"  style={{borderRadius:'10px'}}>
              <div className="row p-3">
                <div className="col-md-12">
                  <h6 className='text-dark fw-bold' style={{fontSize:'23px'}}>Job description</h6>
                </div>
                <div className="col-md-12"><p ><span className='fw-bold  para'>Designation</span> <span className='text-secondary'>: React.js Developer </span></p>  </div>
                <div className="col-md-12"><p ><span className='fw-bold para'>Job Location</span> <span className='text-secondary'>: Lucknow (Work from office) </span></p> </div>
                <div className="col-md-12"><p ><span className='fw-bold para'>Requirment Notic period</span> <span className='text-secondary'>: Immediate joiner to 30 Days </span></p> </div>
                
              </div>
              <div className="row p-3">
              <div className="col-md-12 "> <h6 className='text-dark fw-bold' style={{fontSize:'20px'}}>Role & responsibilities:</h6> </div>
              <div className="col-md-12">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default InterviewDetail