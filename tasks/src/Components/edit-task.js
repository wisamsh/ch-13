
import { useEffect, useContext, useCallback, useState } from "react";
import axios from 'axios';
import useTasksContext from '../Hooks/use-task-conext'; //HOOK CONTEXT
import { ApiUri } from "../Constants/Constants";
import TaskContext from "../Context/tasks";
import { CiEdit } from "react-icons/ci";
import TaskEditForm from './edit-task-form'; 

function TaskEdit({ task, id }) {
 
const [FormStatus , setFormStatus] = useState(false)
const handleFormEditOpen = () => {


FormStatus == false ? setFormStatus(true) : setFormStatus(false);

}


return <>
 <CiEdit onClick={handleFormEditOpen} task={task} id={id}  className="pointer"/>
 {FormStatus == true ? <TaskEditForm task={task} id={id} Ccommand={handleFormEditOpen}/> : ''}
</>
} 

export default TaskEdit;