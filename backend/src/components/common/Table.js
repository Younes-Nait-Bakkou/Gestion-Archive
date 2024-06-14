import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MyPopup from './MyPopup.js';
import Pagination from "./Pagination.js";
import { axiosAuth } from "../../layouts/admin/AdminLayout.js";
import './styles/table.css'
import Loader from "./Loader.js";
import { toHeader, toSlug } from "../utils/utils.js";
import CustomModal from "./components/CustomModal/CustomModal.js";


function useResource(resourceName, isPaginate, setIsLoading) {
  const navigate = useNavigate();
  const [resource, setResource] = useState([]);
  const [links, setLinks] = useState([]);
  const [urlResource, setUrlResource] = useState(`http://localhost:8000/api/${resourceName}`);
  const location = useLocation();
  const path = location.pathname

  const getResource = (url) => {
    setIsLoading(true)
    axiosAuth.get(url)
      .then(res => {
        setResource(res.data.data);
        if (isPaginate) setLinks(res.data.meta.links);
        setIsLoading(false)
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          navigate('/login');
        } else {
          console.error(err);
        }
        setIsLoading(false)
      });
  };

  useEffect(() => {
    if(path === '/admin/dashboard'){
      getResource(`http://localhost:8000/api/modules-recent`)
    }else{
      getResource(urlResource);
    }
  }, []);

  return { resource, links, getResource, path };
}

export default function Table({ resourceName, isPaginate }) {

  const [isLoading, setIsLoading] = useState(true)
  const { resource, links, getResource, path } = useResource(resourceName, isPaginate, setIsLoading);

  const isModules = path === '/admin/views/modules' || path === '/admin/dashboard'

 
  
  

  useEffect(()=>{
    if(path === '/admin/dashboard'){
      getResource(`http://localhost:8000/api/modules-recent`)
    }else{
      getResource(`http://localhost:8000/api/${resourceName}`)
    }
  },[resourceName])

  return (
    <div className="resource-table">

      {isLoading && <Loader /> }

      {!isLoading && 
      (<>
        <table>
        <thead>
          <tr>
            {resource.length !== 0 &&
              Object.keys(resource[0]).map((head, i) =>
                head !== 'id' || !isModules ? <th key={i}>{toHeader(head)}</th> : null
              )}
          </tr>
        </thead>
        <tbody>
          {resource.length !== 0 &&
            resource.map((r) => {
              return (
                <tr key={r.id}>
                  {Object.keys(r).map((key, i) => {
                      if(key === 'status'){
                        return <td key={key} data='status'><div className={toSlug(r.status)}>{r.status}</div></td>
                      }else if( (!isModules || key !== 'id') && key !== 'details'){
                        return <td key={key} >{r[key]}</td> 
                      }else{
                        return null
                      }
                    }
                  )}
                  <td>
                    {/* <MyPopup toHeader={toHeader} resourceName={toHeader(resourceName)} id={r.id} /> */}
                    <CustomModal resourceName={toHeader(resourceName)} id={r.id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
        </table>
        {isPaginate && <Pagination links={links} setIsLoading={setIsLoading} changePage={getResource}/>}
      </>)
      }
    </div>
  );
  
}

