import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { axiosAuth } from '../layouts/admin/AdminLayout';
import Cookies from 'js-cookie';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuth.post('/login',{email,password})
      .then(res=>{
        console.log('logged successfully')
        navigate('/admin/dashboard');
      })
      .catch(err=>{
        console.error(err)
      })
  };

  useEffect(()=>{
    if (!Cookies.get('XSRF-TOKEN')) axios.get('http://localhost:8000/sanctum/csrf-cookie',{
      withCredentials:true
    })
  },[])

  return (
    <div className='auth-container'>
        <div className='form-container'>
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit"> Sign In </button>
        <h4 style={{marginTop:"15px"}}>Don't have an account ? <Link to="/register">Register</Link></h4>
      </form>
        </div>
    </div>
  );
}


