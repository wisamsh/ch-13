import { useState } from "react";
import useTasksContext from '../hooks/use-task-conext'; //HOOK CONTEXT
import { CiEdit } from "react-icons/ci"
import Switch from '@mui/material/Switch';
import DeleteTask from './delete-task';


function TaskShow({ task }) {

    


    const [showEdit, setShowEdit] = useState(false);
    const handleSubmit = () => {
        setShowEdit(false);
       
    }

    const [checked, setChecked] = useState(task.task_status);

   
    const handleChange = (e) => {
      setChecked(e.target.checked);
     
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }



    return <div className="task_container" id={task.task_ID}>
        <div className="stip">
            <span className="del"> <DeleteTask id={task.task_ID}/></span>
            <span className="edit"><CiEdit/></span>
            <span className="switcher">
            <Switch 
            checked={checked}
            onChange={handleChange}
            /></span>
        </div>
           <h1>{task.task_title} <span>{task.task_date}</span></h1> 
           <p>{task.task_description}</p>
    </div>
}
export default TaskShow;