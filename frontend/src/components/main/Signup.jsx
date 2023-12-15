import React from "react";
import { useFormik } from 'formik' ;
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    onSubmit: async (values)=>{
      console.table(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/add` , {
        method :'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }

      });
      console.log(res.status);
      if(res.status === 200) {
        Swal.fire({
          icon: 'success',
          title : 'Sign up Successfully ',
          text :'Now Login To Continue'
        })
        navigate('/main/login')
      }else{
        Swal.fire({
          icon: 'error',
          title : 'Somthing Went Wrong',
          text :'Please Try Again'
        })
      }
    },
  });
  return (
    <div>
      <div className="container col-md-7 d-flex mx-auto align-items-center vh-100 pt-5">
        <div
          className="card w-100 shadow"
          style={{ border: "none", borderRadius: "5px" }}
        >
          <h3 className="text-center mt-4 text-dask fw-bold"> Sign Up </h3>
          <div className="card-body ">
           <div className="row">
            <div className="col-md-6">
            <form onSubmit={signupForm.handleSubmit}>
              <input
                type="text" id="name" onChange={signupForm.handleChange} value={signupForm.values.name}
                className="form-control mb-4  "
                placeholder=" Name"
                style={{ borderRadius: "5px" }}
              />
              <input type="email" id="email" onChange={signupForm.handleChange}  value={signupForm.values.email} className='form-control mb-4 ' placeholder='Email'style={{borderRadius:'5px'}} />
              <input
                type="password" id="password" onChange={signupForm.handleChange} value={signupForm.values.password}
                className="form-control mb-4 "
                placeholder="Password"
                style={{ borderRadius: "5px" }}
              />
              <input
                type="password" id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm}
                className="form-control mb-4 "
                placeholder="Confirm Password"
                style={{ borderRadius: "5px" }}
              />
              <input type="checkbox" />{" "}
              <span>
                {" "}
                I Agree with
                <span className="text-danger fw-bold"> privacy </span>and{" "}
                <span className="text-danger fw-bold">policy</span>
              </span>
              <button
                className="btn btn-outline-success w-100  my-4 "
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Sign up
              </button>
            </form>
            </div>
            <div className="col-md-6">
              <img src="../public/cocacola.png " className="img-fluid" alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
