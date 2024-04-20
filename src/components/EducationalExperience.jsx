// EducationalExperience.jsx

import { useState } from 'react'

export default function EducationalExperience({
    educationExperience, 
    setEducationExperience,
    }){
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEducationExperience(prevData => ({
      ...prevData,
      [name]: value
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent default reload
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="education">Education:</label>
        <input 
          type="text" 
          id="education" 
          name="education" 
          value={educationExperience.education}
          onChange={handleInputChange}
          />
       
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}