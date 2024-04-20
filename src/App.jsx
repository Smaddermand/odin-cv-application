import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Info({
    personalInfo, 
    setPersonalInfo,
    }){
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo(prevData => ({
      ...prevData,
      [name]: value
    }));
  };



  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent default reload
    console.log(fullname);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full name:</label>
        <input 
          type="text" 
          id="fullname" 
          name="fullname" 
          value={personalInfo.fullname}
          onChange={handleInputChange}
          />
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={personalInfo.email}
          onChange={handleInputChange}
          />
         <label htmlFor="phone">Phone Number:</label>
         <input 
          type="tel" 
          name="phone" 
          id="phone" 
          value={personalInfo.phone} // assuming the state is stored in a `personalInfo` object
          onChange={handleInputChange}
/>

        
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default function displayCV(){
  const [personalInfo, setPersonalInfo] = useState({fullname: "", email:"", phone:"",});


  return ( 
    <div>
      <h1>Type your info</h1>
      <h2>Personal Info</h2>
      <Info
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        
        />
    
      <h1>My CV</h1>
      <h2>Personal Info:</h2>
      <p>Name: {personalInfo.fullname} </p>  
      <p>Email: {personalInfo.email}</p>
      <p>phoneNumber: {personalInfo.phone}</p>
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

