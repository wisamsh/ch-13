import React from 'react';
import TaskShow from './taskShow';
import useTasksContext from '../hooks/use-task-conext';
import { MutatingDots } from 'react-loader-spinner'
function TaskList() {
  const { tasks } = useTasksContext();

  if (tasks === null || tasks.length === 0) {
    // Tasks are still being fetched, display a loading state
    return <MutatingDots 
    height="100"
    width="100"
    color="#4fa94d"
    secondaryColor= '#4fa94d'
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />

    
  }


  const renderedTasks = tasks.map((task) => (
    
      <TaskShow task={task} />
   
  ));
  
  return <div className='task-list'>{renderedTasks}</div>;
  
}

export default TaskList;
