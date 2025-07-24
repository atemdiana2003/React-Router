import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {

 const JobDetails = useLoaderData()
  return (
    <div className='job-details'>
       <p><b>Job Title:</b>{JobDetails.title}</p> 
       <p><b>Salary:</b>{JobDetails.salary}</p> 
       <p><b>Job Location:</b>{JobDetails.location}</p> 
       <p><b>Description:</b>Are you passionate about creating exciting and
       user-friandly websites?</p> 
       <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({params})=>{
    const {id} = params
    const res = await fetch("http://localhost:5000/jobs/" +id);
    if(!res.ok){
        throw Error("Could not found job details")
    }
    return res.json();
}