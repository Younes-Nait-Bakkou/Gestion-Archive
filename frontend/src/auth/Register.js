import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { axiosAuth } from '../layouts/admin/AdminLayout';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  /* Pagination */


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  function slug ($word){
    return $word.replace(/\s+/g, '-').toLowerCase()
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuth.post('http://localhost:8000/api/register',{name,email,password})
      .then(res=>{
        console.log('logged successfully')
        navigate('/login');
        console.log(res.data)
      })
      .catch(err=>{
        console.error(err)
      })
  };

  useEffect(()=>{
    axios.get('http://localhost:8000/sanctum/csrf-cookie',{
      withCredentials:true
    })
  },[])

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit"> Sign Up</button>
          <h4 style={{marginTop:"15px"}}>Already have an account ? <Link to="/login">Log in</Link></h4>
        </form>
      </div>
    </div>
  );
}


