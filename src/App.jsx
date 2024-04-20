import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Info({fullname, setFullname }){
  
  const handleInputChange = (event) => {
    setFullname(event.target.value);
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
          value={fullname}
          onChange={handleInputChange}
          />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default function displayCV(){
  const [fullname, setFullname] = useState("");

  return ( 
    <div>
      <h1>Type your info</h1>
      <h2>Personal Info</h2>
      <Info
        fullname={fullname}
        setFullname={setFullname
        }/>
    
      <h1>My CV</h1>
      <h2>Personal Info:</h2>
      <p>Name: {fullname} </p>  
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

