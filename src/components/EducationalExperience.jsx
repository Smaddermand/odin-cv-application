// EducationalExperience.jsx

import { useState } from 'react'

export default function EducationalExperience({addEducation}) {
  const [educationDetails, setEducationDetails] = useState({
    education:"",
    institution: "",
    year: "",
  });

  
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEducationDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent default reload
    addEducation(educationDetails);
    setEducationDetails({education: "", institution: "", year: ""}) //clear form
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="education">Education:</label>
        <input 
          type="text" 
          id="education" 
          name="education" 
          value={educationDetails.education}
          onChange={handleInputChange}
        />
        <label htmlFor="institution">Institution:</label>
        <input 
          type="text" 
          id="institution" 
          name="institution" 
          value={educationDetails.institution}
          onChange={handleInputChange}
        />
        <label htmlFor="year">Year:</label>
        <input 
          type="text" 
          id="year" 
          name="year" 
          value={educationDetails.year}
          onChange={handleInputChange}
        />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}