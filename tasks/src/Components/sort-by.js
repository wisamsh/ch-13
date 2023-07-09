import React, { useState, useEffect, useContext  } from 'react';
import TaskShow from './taskShow';
import useTasksContext from '../Hooks/use-task-conext';
import { MutatingDots } from 'react-loader-spinner';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TaskContext from "../Context/tasks";
function TaskLisSortByt() {
    const { sortTasksById, sortTasksByTitle, sortTasksByStatus, sortTasksByDate, sortTasksByDescription, toggleSortOrder  } = useContext(TaskContext);
const [sortBy , setsortBy] = useState('task_ID'); 


useEffect(() => {
    //console.log(Completed);
  }, [sortBy]);

    const handleSortChange = (e)=> {
setsortBy(e.target.value);
switch (e.target.value) {
    case 'task_ID':
        sortTasksById();
      break;
    case 'task_title':
        sortTasksByTitle();
      break;
    case 'task_status':
        sortTasksByStatus();
      break;
      case 'task_date':
        sortTasksByDate();
      break;
      case 'task_description':
        sortTasksByDescription();
      break;


    default:
        sortTasksById();
      break;
  }


   // console.log(useTasksContext);
   //sortTasksById();
  // sortTasksByTitle();
  //sortTasksByStatus();
  //sortTasksByDate();
  //sortTasksByDescription();
 // toggleSortOrder();
}


    return (
    <>
     <FormControl fullWidth>
            <InputLabel id="sort_by_select-label">Sort By</InputLabel>
            <Select
              labelId="sort_by_select-label"
              id="sort_by_select"
              value={sortBy}
              label="Filter"
              onChange={handleSortChange}
            >
              <MenuItem value={'task_ID'}>ID</MenuItem>
              <MenuItem value={'task_title'}>Title</MenuItem>
              <MenuItem value={'task_status'}>Status</MenuItem>
              <MenuItem value={'task_date'}>Date</MenuItem>
              <MenuItem value={'task_description'}>Description</MenuItem>
              
              

            </Select>
          </FormControl>
    </>


    );

}
export default TaskLisSortByt;