import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateUser() {

  const {id}= useParams()
  const[name, setName]= useState();
  const[email, setEmail]= useState();
  const[age, setAge]= useState();
  const navigate= useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result=>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err=>console.log(err))
  },[])

  const Update=(e)=>{
    e.preventDefault();
    const newLocal = "http://localhost:3001/userUpdate/";
    axios.put(newLocal+id ,{name, email, age})
    .then(result=>{
        console.log(result)
        navigate('/')
    })
    .catch((err)=>console.log(err))
  }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
            <h2>Update User</h2>
          <div class="mb-2">
            <label htmlFor="">
              Name :
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div class="mb-2">
            <label htmlFor="">
              Email :
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div class="mb-2">
            <label htmlFor="" >
              Age :
            </label>
            <input
              type="text"
              placeholder="Enter your Age"
              className="form-control"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
    )
}

export default UpdateUser
