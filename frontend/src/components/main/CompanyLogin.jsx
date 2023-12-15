import React from 'react'
import UseAppContext from '../AppContext';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const CompanyLogin = () => {
  const { setloggedin } = UseAppContext()
  const loginForm = useFormik({
    initialValues :{
      email : '',
      password :'',
     
    }, 
    onSubmit: async(values)=>{
      console.table(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/Company/authenticate`,{

     method : 'POST',
     //stringify is a static method convert javascript value to json string
     body : JSON.stringify(values),
     header : {
      //content-type is a MIME type that indecate content being send or received is json data
      'Content-type' : 'application/json'
     }
    
  })
   console.log(res.status);
  if(res.status === 200){
    Swal.fire({
      icon : 'success',
      title : 'Login Success',
      text : ' Congratulation! You Are Logged In'
    })
     setloggedin(true);
     const data = await res.json()
     sessionStorage.setItem('company', JSON.stringify(data))
   
}else if(res.status === 400)
  {
    Swal.fire({
  icon : 'error',
  title : 'Login Failed', 
  text : 'Invalid email or password'
})
  }
  
}})

  return (
    <div>
       <div className="container col-md-4 d-flex mx-auto align-items-center vh-100 pt-5">
        <div className="card w-100 bg-light" style={{ border: "none", borderRadius: "5px" }}>
        <h3 className="text-center mt-4 text-dark fw-bold"> Company Login </h3>
        <div className="card-body"> 
        <form onSubmit={loginForm.handleSubmit} >
          <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4 ' placeholder = 'Email' style={{ borderRadius: "5px" }} />
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4 ' placeholder = 'password' style={{ borderRadius: "5px" }} />
          <button className='btn btn-success w-100' style={{ borderRadius: "5px" }} > Login Here</button>
          </form>
        </div>
        </div>

      </div>
    </div>
  )
}

export default CompanyLogin