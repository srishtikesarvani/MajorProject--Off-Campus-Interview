import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="container  my-5" style={{borderRadius:'5px'}}>
        <div className="row ">
          <div className="col-md-12">
            <h1 className='display-4 text-center fw-bold text-dark mt-3'>Contact Us</h1>
            <p className='lead text-center '>For Any Query Please Contact With us</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 " style={{paddingLeft:'4rem'}} >
            <i className="fa fa-map-marker text-success" ></i>
            <h3>Location</h3>
            <p>Area,City,Country</p>
            <i className="fa fa-phone text-secondary"></i>
            <h3>Call us</h3>
            <p>+92 345 34567</p>
            <i className="fa fa-envelope text-dark" ></i>
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
                  <input type="text" name='tbname' id='tbname' className='form-control my-2 ' placeholder='Name' />
                </div>
                <div className="col-md-6">
                  <input type="email" name='tbEmail' id='tbEmail' className='form-control my-2 ' placeholder='Email' />
                </div>
                <br />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input type="text" name='tbSubject' id='tbSubject' className='form-control my-2 ' placeholder='Subject' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea name="tbmessage" id="tbmessage"  placeholder='Message' className='form-control my-2'  cols="30" rows="5"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className='btn btn-primary  w-100 mb-3'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs