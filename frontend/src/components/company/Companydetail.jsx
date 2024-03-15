import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Companydetail = () => {
  const {id} = useParams();
  const [companyData, setcompanyData] = useState(null);
  const getCompanyById = async () =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/company/getbyid/${id}`);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setcompanyData(data);
  }


  useEffect(() => {
    getCompanyById();
  }, []);


  const displayDetail = ()=>{
    if(companyData!==null){
      return <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                <div class="card ">
  <img src={`${import.meta.env.VITE_API_URL}/${companyData.image}`} alt=""  className='image-card'/>
  <div class="card-body">
    <h5 class="card-title text-center fw-bold pt-3">Company Detail</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a> */}
    <div className="row ">
    <div className="col-md-4">
    <div className="col-md-12"><p ><span className='fw-bold  para'>Company Name </span> <span className='text-secondary'>: {companyData.name}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Category</span> <span className='text-secondary'>: {companyData.category}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Email</span> <span className='text-secondary'>: {companyData.email}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Location</span> <span className='text-secondary'>: {companyData.location}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Contact No</span> <span className='text-secondary'>:  {companyData.contact}</span></p>  </div>
    </div>
    <div className="col-md-4">
    <div className="col-md-12"><p ><span className='fw-bold  para'>No. Of Employee </span> <span className='text-secondary'>:  {companyData.employee}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Vision </span> <span className='text-secondary'>:  {companyData.vision}</span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Mission </span> <span className='text-secondary'>:  {companyData.mission}</span></p>  </div>
    
    </div>
    <div className="col-md-4">
    <div className="col-md-12"><p ><span className='fw-bold  para'>Company Description </span> <span className='text-secondary'>: <p> {companyData.description}</p> </span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Software Description</span> <span className='text-secondary'>: <p> {companyData.sfdescription}</p> </span></p>  </div>
    <div className="col-md-12"><p ><span className='fw-bold  para'>Service Description</span> <span className='text-secondary'>: <p> {companyData.servicedescription}</p> </span></p>  </div>
    </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>

    }
  }
  return (
    <div className="class1 mt-5">
    {displayDetail()} 
    </div>
  )
}

export default Companydetail
