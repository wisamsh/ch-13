import React, { useState } from 'react';
import { useEffect, useContext, useCallback } from "react";
import { ApiUri } from '../Constants/Constants';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import TaskContext from "../context/tasks";

function DeleteTask({id}) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { fetchTasks } = useContext(TaskContext);
  const handleDelete = async () => {
    const taskId = 123; // Replace with the actual task ID to delete
    const url = ApiUri + 'serverside/wp-json/task-api/v1/task/delete?id=' + id;

    try {
      const response = await axios.get(url);
      fetchTasks();
      //console.log(response.data); // Handle the response data after successful deletion
    } catch (error) {
      console.error(error); // Handle any error that occurs during the request
    }

    setShowConfirmation(false); // Close the confirmation dialog after deletion
  };

  const openConfirmation = () => {
    setShowConfirmation(true); // Open the confirmation dialog
  };

  const closeConfirmation = () => {
    setShowConfirmation(false); // Close the confirmation dialog
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
