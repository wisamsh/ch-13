import React, { useState } from 'react';
import { useEffect, useContext, useCallback } from "react";
import { ApiUri } from '../Constants/Constants';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import TaskContext from "../Context/tasks";

function DeleteTask({id}) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { fetchTasks, filterTasks } = useContext(TaskContext);
  const handleDelete = async () => {
    
    const url = ApiUri + 'serverside/wp-json/task-api/v1/task/delete?id=' + id;

    try {
      const response = await axios.get(url);
      filterTasks('uncompleted');
      
    } catch (error) {
      console.error(error); 
    }

    setShowConfirmation(false); 
  };

  const openConfirmation = () => {
    setShowConfirmation(true); 
  };

  const closeConfirmation = () => {
    setShowConfirmation(false); 
  };

  return (
    <span>
        <MdDelete className='pointer' onClick={openConfirmation}/> 
    

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete the task?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeConfirmation}>No</button>
        </div>
      )}
    </span>
  );
}

export default DeleteTask;
