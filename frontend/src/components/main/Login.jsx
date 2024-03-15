import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2'
import UseAppContext from '../AppContext'

const Login = () => {
  const { setloggedin } = UseAppContext()
  const loginForm = useFormik({
    initialValues :{
      email : '',
      password :'',
     
    }, 
    onSubmit: async(values)=>{
      console.table(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`,{

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
     sessionStorage.setItem('user', JSON.stringify(data))
   
}else if(res.status === 400)
  {
    Swal.fire({
  icon : 'Error',
  title : 'Login Failed', 
  text : 'Invalid email or password'
})
  }
  
}})
  return (
    <div className='class2'>
      <div className="container col-md-6 d-flex mx-auto align-items-center vh-100 ">
        <div className="card w-100 shadow" style={{ border: "none", borderRadius: "5px" , backgroundColor:'#ffffff91', backdropFilter:'blur(10px)'}}>
        <h3 className="text-center mt-4 text-dark " style={{fontWeight:'700'}}> Login Here </h3>
        <div className="card-body py-4"> 
       <div className="row">
        <div className="col-md-6 my-auto">
        <form onSubmit={loginForm.handleSubmit} >
          <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4 ' placeholder = 'Email' style={{ borderRadius: "5px" }} />
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4 ' placeholder = 'password' style={{ borderRadius: "5px" }} />
          <button className='btn btn-success w-100' style={{ borderRadius: "5px" , fontWeight:'400'}} > Login Here</button>
          </form>
        </div>
        <div className="col-md-6">
          {/* <img src="../public/cocaco" className='img-fluid' alt="" /> */}
          
          <div className='image2 '>

          </div>
        </div>
       </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login;
