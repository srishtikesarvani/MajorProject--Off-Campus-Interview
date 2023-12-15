import React from 'react'

const Feedback = () => {
  return (
    <div className="container col-md-5 d-flex mx-auto align-items-center vh-100 pt-5 mt-5" >
      <div className="card mt-5 shadow w-100" style={{border:'none'}}>
        <div className="card-header" style={{border:'none'}}>
          <h5 className='card-title text-danger fw-bold display-6 text-center' >Feedback Request</h5>
        </div>
        <div className="card-body">
          <div className='text-center'>
          <i class="far fa-file-alt fa-4x mb-3 text-danger"></i>
        <p>
          <strong>Your opinion matters</strong>
        </p>
        <p className='text-primary'>
          Have some ideas how to improve our campus placement portal?
          <strong>Give us your feedback.</strong>
        </p>
          </div>
        </div>
        <div className="card-body">
        <div className="col-md-12 text-center"><h5> Your Rating:</h5></div>
        <form >
       <div className="row">
       <div className="col-md-12 mb-2">
          <input type="radio" name='check' /> <label>Very Good</label>
         </div>
         <div className="col-md-12 mb-2">
          <input type="radio" name='check' /> <label>Medicore</label>
         </div>
         <div className="col-md-12 mb-2">
          <input type="radio" name='check' /> <label>Good</label>
         </div>
         <div className="col-md-12 md-2">
          <input type="radio" name='check' /> <label>Very Bad</label>
         </div>
       </div>
       <div className="row">
        <div className="col-md-12">
          <h5 className='text-center' >What could we improve?</h5>
          <textarea cols="20" rows="5" className='form-control'></textarea>

        </div>
       </div>
       <button className='btn btn-danger w-100 my-4'> Submit</button>
        </form>
      </div>
      </div>
     
    </div>
  )
}

export default Feedback