import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


const Jobs = () => {

    const jobsLoaderData = useLoaderData();

  return (
    <div className='jobs'>
        {jobsLoaderData.map((job)=>{
            return <Link to={job.id.toString()} key={job.id}>
                   <h4>{job.title}</h4>
                   <p>{job.location}</p>
                 </Link>
        })}
    </div>
  )
}

export default Jobs

export const jobsLoaderData = async ()=>{
    const res = await fetch("http://localhost:5000/jobs")
    if(!res.ok){
      throw Error('Could not found job list')
    }
    return res.json();

}