import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';

const ContactUs = () => {
  const contactForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      subject:'',
      message:'',

    },
    onSubmit: async (values)=>{
      console.table(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/Contact/add`,{
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
          title : '🤗🤗 Successfully ',
          text :'Successfully! you can contact us'
        })
      
      }else{
        Swal.fire({
          icon: 'error',
          title : 'Somthing Went Wrong',
          text :'Please Try Again'
        })
      }
    },

  })
  return (
    <div className='class2'>
      <div className="container  vh-100 " style={{borderRadius:'5px'}}>
      <form onSubmit={contactForm.handleSubmit}>
        <div className="row ">
          <div className=" col-md-12">
            <h1 className='display-4 text-center fw-bold text-dark mt-5'>Contact Us</h1>
            <p className='lead text-center '>For Any Query Please Contact With us</p>
          </div>
        </div>
        <div className="row">
       
          <div className="col-md-4  text-light" style={{paddingLeft:'4rem'}} >
            <i className="fa fa-map-marker text-danger" ></i>
            <h3> Location</h3>
            <p>Sector c,Lucknow,UttarPradesh</p>
            <i className="fa fa-phone text-danger"></i>
            <h3>Call us</h3>
            <p>+92 345 34567</p>
            <i className="fa fa-envelope text-danger" ></i>
            <h3>Email</h3>
            <p>Info@gmail.com</p>
          </div>
          <div className="col-md-8 " style={{paddingRight:'4rem'}}>
            <div className="contactform">
              <div className="row">
                <div className="col-md-8">
                  <span id='lblResponse' className='tab-content'></span>
                </div>
              </div>
              
              <div className="row">
              
                <div className="col-md-6">
                  <input type="text" id='name' onChange={contactForm.handleChange} value={contactForm.values.name} className='form-control my-2 ' placeholder='Name' />
                </div>
                <div className="col-md-6">

                  <input type="email" id='email' onChange={contactForm.handleChange} value={contactForm.values.email} className='form-control my-2 ' placeholder='Email' />
                </div>
                <br />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input type="text"  id='subject' onChange={contactForm.handleChange} value={contactForm.values.subject} className='form-control my-2 ' placeholder='Subject' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea  id="message" onChange={contactForm.handleChange} value={contactForm.values.message}  placeholder='Message' className='form-control my-2'  cols="30" rows="5"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className='btn btn-success  w-100 mb-3' type='submit'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs