import React from 'react';
import TaskShow from './taskShow';
import useTasksContext from '../hooks/use-task-conext';

function TaskList() {
  const { tasks } = useTasksContext();

  if (tasks === null || tasks.length === 0) {
    // Tasks are still being fetched, display a loading state
    return <div>Loading Tasks...</div>;
  }


  const renderedTasks = tasks.map((task) => (
    
      <TaskShow task={task} />
   
  ));
  
  return <div className='task-list'>{renderedTasks}</div>;
  
}

export default TaskList;
