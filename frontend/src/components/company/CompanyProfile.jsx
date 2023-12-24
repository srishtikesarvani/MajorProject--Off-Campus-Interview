import { useFormik } from 'formik'
import React, { useState } from 'react'

const CompanyProfile = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('company')));
  const profileForm = useFormik({
    initialValues:{
      name:'',
      location:'',
      createdat:'',
      description:''
      
    },
    onSubmit: async(values) =>{
      console.table(values);
      const res= await fetch(`${import.meta.env.VITE_API_URL}/company/update/${currentUser._id}` ,{
        method :'PUT',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }

      })
      console.log(res.status);
      if(res.status === 200) {
        Swal.fire({
          icon: 'success',
          title : 'Successfully fetched company profile ',
          text :'Congratulations !!!🤩🤩🤩'
        })
      
      }else{
        Swal.fire({
          icon: 'error',
          title : 'Somthing Went Wrong',
          text :'Please Try Again'
        })
      }
    }
  })
  const uploadFile = async (e) => {
    if(!e.target.files) return;

    const file = e.target.files[0];

     const fd = new FormData();
    
    fd.append('myfile', file);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/uploadfile`, {
      method: 'POST',
      body: fd
    });

    const res2= await fetch(`${import.meta.env.VITE_API_URL}/company/update/${currentUser._id}` ,{
      method :'PUT',
      body : JSON.stringify({image : file.name}),
      headers : {
        'Content-Type' : 'application/json'
      }

    })

    const data = await res2.json();
    setCurrentUser(data);
    sessionStorage.setItem('company', JSON.stringify(data));

    console.log(res.status);
  }


  return (
    <div>
      <div className="container">
        <h3>Company profile</h3>
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-md-10 mb-4 mb-lg-0">
            <div className="card mb-3" style={{borderRadius:'.5rem'}}>
              <div className="row">
                <div className="col-md-4 text-center">
                  <img className='img-fluid' src={`${import.meta.env.VITE_API_URL}/${currentUser.image}`} alt="" />
                  <label htmlFor="img" className='btn btn-dark'>  Update Image</label>
                  <input onChange={uploadFile} type="file" id="img" hidden />
                  <h2>Company Name</h2>   
                  <p>Location</p>
                </div>
                <div className="col-md-8">
                  <form  onSubmit={profileForm.handleSubmit}>
             <div className="col p-3">    
                <input type="text" id='name' onChange={profileForm.handleChange} value={profileForm.values.name} placeholder='Company Name' className='form-control mb-3' />
                    <input type="text"  id='location' onChange={profileForm.handleChange} value={profileForm.values.location} placeholder='Location' className='form-control mb-3' />
                    <input type="date"  id='createdat' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <input type="date"  id='' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <input type="date"  id='createdat' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <input type="date"  id='createdat' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <input type="date"  id='createdat' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <input type="date"  id='createdat' onChange={profileForm.handleChange} value={profileForm.values.createdat} placeholder='Created At' className='form-control mb-3' />
                    <label htmlFor=""> Company Description</label>
                    <textarea name="" id= " description" onChange={profileForm.handleChange} value={profileForm.values.description} cols="30" rows="5" className='form-control mb-3'></textarea>
                    <label htmlFor="">Software Description</label>
                    <textarea name="" id= " sfdescription" onChange={profileForm.handleChange} value={profileForm.values.sfdescription} cols="30" rows="3" className='form-control mb-3'></textarea>
                    <label htmlFor=""> Service Description</label>
                    <textarea name="" id= "servicedescription" onChange={profileForm.handleChange} value={profileForm.values.servicedescription} cols="30" rows="3" className='form-control mb-3'></textarea>
                    <button className='btn btn-outline-success w-100' type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default CompanyProfile