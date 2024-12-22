import React from 'react'
import { useState } from 'react';
const AddJobPage = () => {
  const[title,setTitle]=useState();
  const[type,setType]=useState();
  const[location,setlocation]=useState();
  const[description,setdescription]=useState();
  const[salary,setsalary]=useState();
  const[companyName,setcompanyName]=useState();
  const[companyDescription,setcompanyDescription]=useState();
  const[contactEmail,setContactEmail]=useState();
  const[contactPhone,setTitleContactPhone]=useState();
  return (
    <section class="bg-indigo-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form>
          <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

          <div class="mb-4">
            <label htmlFor="type" class="block text-gray-700 font-bold mb-2"
              value={title}
              onChange={(e)=>setTitle(e.target.value)} >Job Type</label
            >
            <select
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
              value={type}
              onChange={(e)=>setType(e.target.value)}
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Job Listing Name</label
            >
            <input
              type="text"
              id="title"
              name="title"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Beautiful Apartment In Miami"
              required
              value={description}
              onChange={(e)=>setdescription(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              htmlFor="description"
              class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
              value={companyDescription}
              onChange={(e)=>setcom(e.target.value)}
            ></textarea>
          </div>

          <div class="mb-4">
            <label htmlFor="type" class="block text-gray-700 font-bold mb-2"
              >Salary</label
            >

            <select
              id="salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              required
              value={salary}
              onChange={(e)=>setsalary(e.target.value)}
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - 60K">$50K - $60K</option>
              <option value="$60K - 70K">$60K - $70K</option>
              <option value="$70K - 80K">$70K - $80K</option>
              <option value="$80K - 90K">$80K - $90K</option>
              <option value="$90K - 100K">$90K - $100K</option>
              <option value="$100K - 125K">$100K - $125K</option>
              <option value="$125K - 150K">$125K - $150K</option>
              <option value="$150K - 175K">$150K - $175K</option>
              <option value="$175K - 200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class='mb-4'>
            <label class='block text-gray-700 font-bold mb-2'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              class='border rounded w-full py-2 px-3 mb-2'
              placeholder='Company Location'
              required   
              value={location}
              onChange={(e)=>setlocation(e.target.value)}        
            />
          </div>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <div class="mb-4">
            <label htmlFor="company" class="block text-gray-700 font-bold mb-2"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name"

              value={companyName}
              onChange={(e)=>setcompanyName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label
              htmlFor="company_description"
              class="block text-gray-700 font-bold mb-2"
              >Company Description</label
            >
            <textarea
              id="company_description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="What does your company do?"
              value={description}
              onChange={(e)=>setcompanyDescription(e.target.value)}
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              htmlFor="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Contact Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email address for applicants"
              required
              value={contactEmail}
              onChange={(e)=>setContactEmail(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              htmlFor="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Contact Phone</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Optional phone for applicants"
              value={contactPhone}
              onChange={(e)=>setTitleContactPhone(e.target.value)}
            />
          </div>

          <div>
            <button
              class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  );
    
  
}

export default AddJobPage
