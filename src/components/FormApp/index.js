import React, { useState } from 'react'
import './index.css';

export default function FormApp() {
 const [set, setState] = useState("");

 const DetailsFunc=()=>{
  console.log(set)
 }

  return (
    <div className='top-section'>
      <div className='card-section'>
        <label className='labelHeading'> Enter Value <br />
          <input className='inputText' type="text" value={set} onChange={(e)=>{setState(e.target.value)}} placeholder='Enter Value?'/><br />
          <input className='btn btn-outline-light' onClick={DetailsFunc} type='button' value="Save"/>
        </label>
      </div>    
    </div>
  )
};
