import { useState } from "react";
import { useEffect, useContext, useCallback } from "react";
import axios from 'axios';
import useTasksContext from '../Hooks/use-task-conext'; //HOOK CONTEXT
import { ApiUri } from "../Constants/Constants";
import TaskContext from "../Context/tasks";
import { CiEdit } from "react-icons/ci";
function TaskFormEdit({ task, id }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task.task_date);

    }
    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    const formattedDate = formatDate(task.task_date);


    const HandleChange = (e) => {
        console.log(e)
    }


    return <div className="edittaskbox">

        <form className="box creatTask" onSubmit={handleSubmit}>
            <h4>Edit Task</h4>
            <div className="field">
                <label className="label">Task Title</label>
                <div className="control">
                    <input className="input" name="title" type="text" placeholder="Title" defaultValue={task.task_title} onChange={HandleChange} />
                </div>
            </div>

            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="date" type="date" name="date" defaultValue={formattedDate} onChange={HandleChange} />
                </div>
            </div>


            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea 
                    className="input" 
                    name="desc" 
                    type="text" 
                    defaultValue={task.task_description} 
                    style={{
                        minHeight: '100px',
                        resize: "none"
                      }}
                    ></textarea>
                </div>
            </div>

            <button className="button is-primary">SAVE TASK</button>



        </form>

    </div>
}

export default TaskFormEdit;