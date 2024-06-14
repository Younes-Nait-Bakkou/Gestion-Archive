import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import axios, { Axios } from 'axios';

function App() {
  const [students,setStudents] = useState([]);
  const [student, setStudent] = useState({
    name:''
  });
  const [formData, setFormData] = useState({
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/test',formData)
      .then(res => {
        
        setStudents(prevStudents => [...prevStudents, res.data.student]);
        console.log(res.data.student)
        
        axios.get(`http://localhost:8000/api/test/${res.data.student.id}`)
          .then(res => {
            setStudent(res.data.student)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }); 

    console.log('Form submitted:', formData);
  };

  const handleUpdate = ()=>{
    axios.put('http://localhost:8000/api/test/85',formData,{
      headers:{
        Accept:'application/json',
        'X-XSRF-TOKEN':Cookies.get('XSRF-TOKEN')
      },
      withCredentials:true
    })
      .then(res=>{
        console.log(res.data.student)
      })
      .catch(err=>{
        console.error(err)
      })
  }
  const handleDelete = ()=>{

  }
  useEffect(() => {

    axios.get('http://localhost:8000/sanctum/csrf-cookie',{
      withCredentials:true
    })

    axios.get('http://localhost:8000/api/test')
    .then(res => {
      
        setStudents(res.data.students);
      
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  
  return (
    <div>
      <div>Show:{student.name}</div>
      <div>
            {students && students.map(s => {

              return(<div key={s.id}> {s.name} </div>)
              })}
      </div>
      <div>
      <h1>React Form Example</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <input type='button' onClick={handleUpdate} value={'Update'} /> 
        <input type='button' onClick={handleDelete} value={'Delete'} /> 
        <button onClick={handleSubmit} type="submit" >Submit</button>
      </form>
    </div>
    </div>
    
  )
}

export default App;
