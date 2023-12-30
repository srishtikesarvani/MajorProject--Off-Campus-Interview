import React, { useEffect, useState } from 'react'

const ManageInterview = () => {
  const [interviewlist, setinterviewlist] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('company')));


  const fetchinterviewData  = async() =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/getbycompany/`+currentUser._id);
    console.log(res.status);
    const data = await res.json();
    setinterviewlist(data)
    console.table(data);

  };
  useEffect(() =>{
    fetchinterviewData();
  },[]);
  const deleteinterview = async (id) =>{
    console.log(id);
    const res = await fetch(`${import.meta.env.VITE_API_URL}/interview/delete/${id}`,{method: 'DELETE'})
    console.log(res.status);
    if (res.status === 200) {
      fetchinterviewData()

      
    }
  }
  return (
    <div className="class1">
      <div className="container">
        <h3 className='text-center my-4'>
          Manage Interview
        </h3>
        <table className="table">
          <thead>
            <tr>
            <th> S. no.</th>
            <th>ID</th>
            <th>Designation</th>
           {/* <th>Company</th> */}
            {/* <th>Name </th> */}
            <th>Location</th>
            <th>Experience</th>
            <th> Created At</th>
            <th colSpan={2} className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
           {interviewlist.map((interview,index) =>
            <tr key = {interview._id}>
            <td>{index + 1}</td>
            <td>{interview._id}</td>
            <td>{interview.designation}</td>
            {/* <td>{interview.company.name}</td> */}
            {/* <td>{interview.name}</td> */}
            <td>{interview.location}</td>
            <td>{interview.experience}</td>
            <td>{interview.createdat}</td>
            <td>
                      <button className="btn btn-danger" onClick={()=>{deleteinterview(interview._id)}}>Delete</button>
                  </td>
          </tr>
           )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageInterview