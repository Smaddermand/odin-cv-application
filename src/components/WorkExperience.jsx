// WorkExperience.jsx

import { useState } from "react";

export default function WorkExperience({ addExperience }) {
  const [experienceDetails, setExperienceDetails] = useState({
    company: "",
    title: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperienceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addExperience(experienceDetails);
    setExperienceDetails({
      company: "",
      title: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    }); //clears form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={experienceDetails.company}
          onChange={handleInputChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={experienceDetails.title}
          onChange={handleInputChange}
        />
        <label htmlFor="responsibilities">Responsibilities:</label>
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          value={experienceDetails.responsibilities}
          onChange={handleInputChange}
        />
        <label htmlFor="startDate">StartDate:</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={experienceDetails.startDate}
          onChange={handleInputChange}
        />
        <label htmlFor="endDate">EndDate:</label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          value={experienceDetails.endDate}
          onChange={handleInputChange}
        />
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
}
