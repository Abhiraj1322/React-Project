import React from 'react'
import Hero from'../Components/Hero';
import Homecard from '../Components/Homecard';
import JobListings from '../Components/JobListings';
import ViewAlljobs from'../Components/ViewAlljobs';
const Homepage = () => {
  return (
    <>
    <Hero/>
    <Homecard/>
    <JobListings isHome={true}/>
    <ViewAlljobs/>
    </>
  )
}

export default Homepage
