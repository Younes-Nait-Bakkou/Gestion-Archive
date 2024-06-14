import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import './admin.css';
import useWindowSize from "../../components/hooks/useWindowSize";


const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';


const axiosAuth = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
    'Access-Control-Allow-Origin':'*'

  },
  withCredentials: true,
});

export default function AdminLayout() {
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    const navigate = useNavigate();
    const  width  = useWindowSize();
    const [showSidebar , setShowSidebar] = useState(true);


    const loggedIn = () => {
      axiosAuth.get('/dashboard')
        .then(res => {
          setIsLoggedIn(true)
          console.log(res.data);
        })
        .catch(err => {
          if (err.response && err.response.status === 401) {
            navigate('/login');
          } else {
            console.error(err);
          }
        });
    };

    useEffect(() => {
      loggedIn();
      console.log(width)
    }, []);

    useEffect(() => {
      if (width > 768) {
        setShowSidebar(true)
      }
    }, [width]);

    return(
      <>
        { isLoggedIn && (
          <div className='admin-container'>
                <Header setShowSidebar={setShowSidebar}/>
                {showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>}
                <Outlet />
          </div>
        )}
      </>
    );
}

export {axiosAuth};