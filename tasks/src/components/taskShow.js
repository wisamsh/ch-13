import { useState } from "react";
import useTasksContext from '../hooks/use-task-conext'; //HOOK CONTEXT
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci"
import Switch from '@mui/material/Switch';



function TaskShow({ task }) {
console.log(task);
    const { deleteTaskById } = useTasksContext();
    


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


    const handleDeleteClick = () => {
        deleteTaskById(task.id);
    }

    return <div className="task_container" id={task.task_ID}>
        <div className="stip">
            <span className="del"><MdDelete/></span>
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