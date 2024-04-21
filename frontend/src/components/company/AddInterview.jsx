import { useFormik } from "formik";
import UseAppContext from "../AppContext"
import Swal from "sweetalert2";
import { useState } from "react";


const AddInterview = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('company')));
  const {setinterview} = UseAppContext();
  const interviewForm = useFormik({
    initialValues:{
      designation : '',
      company : currentUser._id,
      experience: '',
      location : '',
      requirement : '',
      skill:'',
      salary:'',
      noticePeriod:'',
      applyLink:'',
      createdAt : new Date(),
     
    },
    onSubmit: async(values) => {
      console.table(values);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/add`,{
        method: 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-type' : 'application/json'
        }
      })
      console.log(true);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Interview Success',
          text : ' Congratulation! You are successfully enrolled for interview'
        })
      
        const data = await res.json()
        sessionStorage.setItem('Interview', JSON.stringify(data))
      } else if(res.status === 400){
        Swal.fire({
          icon : 'Error',
          title : ' Failed', 
          text : 'Oops!!😔😔😔😔 You should try again'
        })
      }
    }
  }) 

  return (
    <div className="class2"  style={{paddingTop: '80px'}}>
      <div className="col-md-6 d-flex mx-auto align-items-center pt-5 vh-100 ">
        <div className="card w-100" style={{ border: "none", borderRadius: "5px" , backgroundColor:'#ffffff91', backdropFilter:'blur(10px)'}}>
          <h3 className='text-center my-4 display-6 ' style={{fontWeight:'400'}}>Add Interview</h3>
          <div className="card-body">
          <form onSubmit={interviewForm.handleSubmit} >
            <input type="text" id="designation" onChange={interviewForm.handleChange} value={interviewForm.values.designation}  placeholder='Designation'  className='form-control mb-3' />
            {/* <input type="text"  id="company" onChange={interviewForm.handleChange} value={interviewForm.values.company} placeholder='Company'  className='form-control mb-3' /> */}
            {/* <input type="text"  id="name" onChange={interviewForm.handleChange} value={interviewForm.values.name} placeholder='Name'  className='form-control mb-3' /> */}
            
            <input type="text"  id="skill" onChange={interviewForm.handleChange} value={interviewForm.values.skill} placeholder='Your Skills'  className='form-control mb-3' />
            
           <div className="row">
            <div className="col-md-6">
            <input type="text"  id="salary" onChange={interviewForm.handleChange} value={interviewForm.values.salary} placeholder='Salary'  className='form-control mb-3' />
            
            </div>
            <div className="col-md-6">
            <input type="text"  id="location" onChange={interviewForm.handleChange} value={interviewForm.values.location} placeholder='Location'  className='form-control mb-3' />
            </div>
           </div>
           <div className="row">
           <div className="col-md-6"> <input type="text"  id="noticePeriod" onChange={interviewForm.handleChange} value={interviewForm.values.noticePeriod} placeholder='Notice for User Awareness'  className='form-control mb-3' /></div>
           <div className="col-md-6">
           <input type="text"  id="experience" onChange={interviewForm.handleChange} value={interviewForm.values.experience} placeholder='Experience'  className='form-control mb-3' />
           </div>
           </div>
           
            <input type="text"  id="applyLink" onChange={interviewForm.handleChange} value={interviewForm.values.applyLink} placeholder='Add your company link'  className='form-control mb-3' />
            <label htmlFor="" className='my-1'>Description</label>
            <textarea name=""  id="requirement" onChange={interviewForm.handleChange} value={interviewForm.values.requirement}  cols="30" rows="3 " className='form-control mb-3'></textarea>
            <button className='btn btn-success w-100 my-3' type="submit"> Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInterview