// App.jsx file

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'
import EducationCard from './components/EducationCard.jsx'
import './App.css'




export default function displayCV(){
  const [personalInfo, setPersonalInfo] = useState({fullname: "", email:"", phone:"",});
  const [educations, setEducations] = useState([])

  const addEducation = (newEducation) => {
    setEducations(prevEducations => [...prevEducations, newEducation]);
  };


  return ( 
    <div>
      <h1>Type your info</h1>
      <h2>Personal Info</h2>
      <GeneralInformation
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      <h2>Education</h2>
      <EducationalExperience addEducation={addEducation}
      />

    
      <h1>My CV</h1>
      <div>
        <h2>Personal Info:</h2>
        <p>Name: {personalInfo.fullname} </p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </div>
      <div>
        <h2>Education</h2>
        {educations.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </div>
  )
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
      
//     </>
//   )
// }

// export default App

