
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [gender,setGender]=useState("Male");
  const [shirt,setShirt]=useState("shirt");
  const [size,setSize]=useState(["small","medium","large"])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Select your gender:</h1>
        <input type="radio" name="gender" id="male" onClick={()=>{
          setGender("Male");
          setShirt("shirt");
          setSize(["small","medium","large"]);
        }}/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" onClick={()=>{
          setGender("Female");
          setShirt("dress");
          setSize(["2","4","6"])
        }}/>
        <label htmlFor="female">Female</label>
        <h1>Select your {shirt} size:</h1>
        <select name="" id="">
        <option value="">Select size</option>
          <option value="">{size[0]}</option>
          <option value="">{size[1]}</option>
          <option value="">{size[2]}</option>
        </select>
    </div>
  )
}

export default App
