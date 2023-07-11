import React, { useState, useEffect } from 'react';
import TaskShow from './taskShow';
import useTasksContext from '../Hooks/use-task-conext';
import { MutatingDots } from 'react-loader-spinner';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SortBy from './sort-by';
import AscDescSort from './asc-desc-Sort';
function TaskList() {
  const { tasks, filterTasks, fetchTasks } = useTasksContext();
  const [EditStatus, setEditStatus] = useState(false);
  const [Completed, setCompleted] = useState('All');

  useEffect(() => {
    //console.log(Completed);
  }, [Completed]);


  if (tasks === null || tasks.length === 0) {
    // Tasks are still being fetched, display a loading state
    return (
      <MutatingDots
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );

  }


  const handleFilterChange = async (e) => {
    const selectedValue = e.target.value;
    filterTasks(e.target.value);
    setCompleted(selectedValue);
  };



  const renderedTasks = tasks.map((task) => (
    <TaskShow task={task} key={task.task_ID} />
  ));


  return (
    <div>
      <div className="columns">
        <div className="column">

          <FormControl fullWidth>
            <InputLabel 
            id="demo-simple-select-label"
            sx={{
              zIndex: '0', 
            }}
            >Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Completed}
              label="Filter"
              onChange={handleFilterChange}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'completed'}>Completed</MenuItem>
              <MenuItem value={'uncompleted'}>Uncompleted</MenuItem>
            </Select>
          </FormControl>



        </div>
        <div className="column"><SortBy/></div>
        <div className="column"><AscDescSort/></div>
      </div>
      <div className="task-list">{renderedTasks}</div>
    </div>
  );
}

export default TaskList;
