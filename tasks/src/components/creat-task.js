import React, { useState } from 'react';
import axios from 'axios';
import TaskContext from "../Context/tasks";
import { useEffect, useContext, useCallback } from "react";
import { ApiUri } from '../Constants/Constants';
function FormComponent({CloseModal, Key}) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    desc: ''
  });

  const [Validation, setValidation] = useState(0);

  const { fetchTasks } = useContext(TaskContext);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (formData.title === '' || formData.date === '' || formData.description === '') {
        setValidation(1);
        return;
    }
    

    // Clear the form inputs
    setFormData({ title: '', date: '', desc: '' });

    // Sending form data to the server using GET request with Axios
    const url = ApiUri + 'serverside/wp-json/task-api/v1/task/add';
    const queryParams = new URLSearchParams(formData).toString();
    const fullUrl = `${url}?${queryParams}`;

    axios.get(fullUrl)
      .then((response) => {
        setFormData({ title: '', date: '', desc: '' } )
        CloseModal();
        fetchTasks(); //THIS WILL FETCH FROM API WITH THE NEW TASK 
        
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error here
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    


<form className="box creatTask" onSubmit={handleSubmit}>
<h1>Add New Task</h1>
  <div className="field">
    <label className="label">Task Title</label>
    <div className="control">
      <input className="input" name="title" type="text" placeholder="Title" defaultValue={formData.title} onChange={handleChange}/>
    </div>
  </div>

  <div className="field">
    <label className="label">Date</label>
    <div className="control">
    <input className="date" type="date" name="date" defaultValue={formData.date} onChange={handleChange} />
    </div>
  </div>


  <div className="field">
    <label className="label">Description</label>
    <div className="control">
    <textarea 
    className="input"
     name="desc" 
     type="text" 
      defaultValue={formData.desc} onChange={handleChange}
      style={{
                        minHeight: '100px',
                        resize: "none"
                      }}
      >

      </textarea>
    </div>
  </div>

  <button className="button is-primary">SAVE TASK</button>
  {Validation === 1 ? <p className='validationlable'>Fields Missing</p> : ''}


</form>


  );
}

export default FormComponent;
