import {useState} from 'react';
import swal from 'sweetalert';

const FormApp=()=>{
  let [userName, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  
  
  
  let submitData=()=>{
    
    let data = {
      "userName" : userName,
      "email" : email,
      "password" : password
    }

    fetch("https://gorest.co.in/public-api/users", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        Authorization : "Bearer a9c1e9113a9be853be9d1927838b253d5904ecc78bbda55a698d5202978482e1",
      },
      body : JSON.stringify(data)
    })
     .then((response)=> {
      console.log(response)
      if (response.status === 200){
        swal("Good job!", "User Registered Successfully", "success");
      }
      response.json()
     })
     .then((data)=>{
      localStorage.setItem("userInfo", JSON.stringify(data))
      console.log("success: ", data);
     })
     .catch((error) =>{
      console.error("Error: ", Error)
     })

  }
  
  
  
  
  
  
  return(
    <div className="row">
      <div className="col-6 mt-3 offset-3 ">
      <h1 className="text-center"> New Form Submitted </h1>
      <form>
        
        <label htmlFor="userName"></label>
        <input type="text" id="userName" value={userName} className="form-control" 
        placeholder="User Name" onChange={(event)=> setUsername(event.target.value)}/>

        <label htmlFor="email"></label>
        <input type="text" id="email" value={email} className="form-control" 
        placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/>

        <label htmlFor="password"></label>
        <input type="text" id="password" value={password} className="form-control" 
        placeholder="Password" onChange={(event)=> setPassword(event.target.value)}/>

        <div className="d-grid gap-2">
        <button type="button" className="btn btn-info mt-4" onClick={()=>{submitData()}}> Save </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default FormApp;