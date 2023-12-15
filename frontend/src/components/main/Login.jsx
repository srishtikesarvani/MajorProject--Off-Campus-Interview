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
    <div>
      <div className="container col-md-6 d-flex mx-auto align-items-center vh-75 mt-5">
        <div className="card w-100 shadow" style={{ border: "none", borderRadius: "5px" }}>
        <h3 className="text-center mt-4 text-dark " style={{fontWeight:'400'}}> Login Here </h3>
        <div className="card-body py-4"> 
       <div className="row">
        <div className="col-md-6">
        <form onSubmit={loginForm.handleSubmit} >
          <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4 ' placeholder = 'Email' style={{ borderRadius: "5px" }} />
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4 ' placeholder = 'password' style={{ borderRadius: "5px" }} />
          <button className='btn btn-success w-100' style={{ borderRadius: "5px" , fontWeight:'400'}} > Login Here</button>
          </form>
        </div>
        <div className="col-md-6">
          <img src="../public/cocacola.png" className='img-fluid' alt="" />
        </div>
       </div>
        </div>
        </div>

      </div>
    </div>
  )
}


  // Initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      console.log(import.meta.env.VITE_API_URL);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if (res.status === 200) {
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Nice!',
        //   text: 'Logged in Successfully 😎'
        // });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        // setLoggedIn(true);
        // resetForm();

      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Email or Password is incorrect 😢'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong'
        })
      }

      // write code to submit form to server
    },

  });

  return (
    <div
      className="bg"    >
      <div className="w-25">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form onSubmit={loginForm.handleSubmit}>
              <label htmlFor="">Email Address</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{loginForm.errors.email}</span>
              <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />

              <label htmlFor="">Password</label>
              <span style={{ color: 'red', fontSize: '0.7em', marginLeft: 10 }}>{loginForm.errors.password}</span>
              <input type="password" className="form-control mb-3" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
