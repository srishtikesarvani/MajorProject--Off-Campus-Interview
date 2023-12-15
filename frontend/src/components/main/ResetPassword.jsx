import React from 'react'

const ResetPassword = () => {
  return (
    <div>
     <div>
     <form action="">
      <div className="row d-flex  shadow" style={{marginTop:'10rem', marginLeft:'20rem' , width:'50%', float:'left', borderRadius:'50px'}}>
        
        <div className="col-md-5" style={{marginLeft:'2rem'}}>
          <div className="card " style={{border:'none'}}>
            <h3 className='text-danger text-center pt-3'>Reset Password</h3>
            <div className="card-body">
            <input type="email"  placeholder='Email' className='form-control mb-4 '/>
            
            <button className='btn btn-danger w-100 ' style={{marginTop:'7.5rem'}}> Submit</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
        <div className="card " style={{border:'none' ,marginRight:'1rem' }}>
            <h3 className='text-danger text-center pt-3'> Password Confirmation</h3>
            <div className="card-body">
            <input type="password"  placeholder='old Password' className='form-control mb-4'/>
            <input type="password"  placeholder='New Password' className='form-control mb-4'/>
            <input type="password"  placeholder='Confirm Password' className='form-control mb-4'/>
           
            <button className='btn btn-danger w-100'> Submit</button>
            </div>
          </div>
       
        
        </div>
      </div>
      </form>
     </div>
    </div>
  )
}

export default ResetPassword