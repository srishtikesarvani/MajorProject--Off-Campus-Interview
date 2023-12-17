import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const InterviewDetail = () => {

  const {id} = useParams();

  const [interviewData, setInterviewData] = useState(null);

  // console.log(id);

  const getInterviewByID = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/getbyid/${id}`);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setInterviewData(data);
      }

  useEffect(() => {
    getInterviewByID();
  }, []);

  const displayDetails = () => {
    if(interviewData!==null){
      return <>
        <div className="container  col-md-6 d-flex mx-auto align-items-center vh-75  mt-5">
            <div className="card w-100 " style={{borderRadius:'10px'}}>
             <div className="row p-3">
            <div className="col-md-12 text-secondary">
             <h6 className='text-dark fw-bold ' style={{fontSize:'30px'}}>{interviewData.designation}</h6>
            </div>
            <div className="col-md-12 ">
              <p className='text-secondary '  style={{fontWeight:'400'}}> {interviewData.company.name}<span className='px-3'> <i className="  text-warning fa fa-star" ></i>  4.6  <span className='px-3'>2 Reviews</span> </span></p>
            </div>
            <div className="col-md-12">
             <p className='text-secondary' style={{fontWeight:'400'}}> 💼{interviewData.experience}  <span className='px-3'>₹  <span  className='px-1'> Not Disclosed</span></span></p> 
            </div>
           <div className="col-md-12 text-secondary"> <i className="  fa fa-map-marker" ></i> <span className='px-2' style={{fontWeight:'400', fontSize:'18px'}}>{interviewData.location}</span> </div>

             </div>
             <div className="crad-footer " style={{borderTop:'1px solid grey'}}>
              <div className="row p-3">
                <div className="col-md-8">
                  <p className='text-secondary '>Posted: 1 day ago <span className='px-3'>Openings: 6</span> <span> Applicant: 33</span></p>
                </div>
                <div className="col-md-4">
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
                <div className="col-md-12"><p ><span className='fw-bold  para'>Designation</span> <span className='text-secondary'>: {interviewData.designation}</span></p>  </div>
                <div className="col-md-12"><p ><span className='fw-bold para'>Job Location</span> <span className='text-secondary'>: {interviewData.location} </span></p> </div>
                <div className="col-md-12"><p ><span className='fw-bold para'>Requirment Notice period</span> <span className='text-secondary'>: Immediate joiner to 30 Days </span></p> </div>
                
              </div>
              <div className="row p-3">
              <div className="col-md-12 "> <h6 className='text-dark fw-bold' style={{fontSize:'20px'}}>Role & responsibilities:</h6> </div>
              <div className="col-md-12">
                <ul>
                  <li><span className='fw-bold'>Job Role :</span> {interviewData.designation}</li>
                  <li><span  className='fw-bold'>Job Role Description :</span>Design, build and configure applications to meet business process and application requirements.</li>
                  <li><span className='fw-bold'>Management Level :</span>10</li>
                  <li><span className='fw-bold'>Work Experience :</span>0-1 years</li>
                  <li><span className='fw-bold'>Work location :</span>Bengaluru</li>
                 <li> <span className='fw-bold'> Key Skills :</span>
                
Skills highlighted with <i className="fa fa-star  text-outline-grey"></i> are preferred keyskills</li>
                  
                </ul>
              </div>
              </div>

            </div>
        </div>
      </>
    }else{
      return <h3>Loading Data, Please Wait ...</h3>
    }
  }  

  return (
    <div>
        {displayDetails()}
    </div>
  )
}

export default InterviewDetail