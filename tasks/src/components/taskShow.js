import { useState } from "react";
import { useEffect, useContext, useCallback } from "react";
import axios from 'axios';
import useTasksContext from '../Hooks/use-task-conext'; //HOOK CONTEXT
import EditTask from '../Components/edit-task';
import Switch from '@mui/material/Switch';
import DeleteTask from './delete-task';
import { ApiUri } from "../Constants/Constants";
import TaskContext from "../Context/tasks";
import { BiCheck } from "react-icons/bi";

function TaskShow({ task }) {
    const { fetchTasks } = useContext(TaskContext);
    const [showEdit, setShowEdit] = useState(false);
    const [checked, setChecked] = useState(task.task_status);
    const [StatusChange, setStatusChange] = useState('Status');

    const handleStatusChange = async (e) => {
        const status = e.target.checked ? 1 : 0;
        const id = String(e.target.id); // Convert id to a string
        const url = ApiUri + 'serverside/wp-json/task-api/v1/task/update?id=' + id + '&state=status' + '&status=' + status;

        try {
            // 
            //console.log("checked:", response);
            setChecked(e.target.checked);
            const response = await axios.get(url);

            if (response.data.task) {
                setStatusChange(<BiCheck size={20} color="green" />);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    return (
        <div className="task_container" id={task.task_ID}>
            <div className="stip">
                <span className="del">
                    <DeleteTask id={task.task_ID} />
                </span>
                <span className="edit">
                    <EditTask id={task.task_ID} task={task} />
                </span>
                <span className="switcher">
                    <span className="status">{StatusChange}</span>
                    <Switch className="swithcer_state"
                        checked={checked}
                        onChange={handleStatusChange}
                        id={String(task.task_ID)} // Convert id to a string
                    />
                </span>
            </div>
            <h1>{task.task_title} <span>{task.task_date}</span></h1>
            <p>{task.task_description}</p>
        </div>
    );
}

export default TaskShow;
