import { useState } from "react";
import { useEffect, useContext, useCallback } from "react";
import axios from 'axios';
import useTasksContext from '../Hooks/use-task-conext'; //HOOK CONTEXT
import { ApiUri } from "../Constants/Constants";
import TaskContext from "../Context/tasks";
import { CiEdit } from "react-icons/ci";
function TaskFormEdit({ task, id, Ccommand}) {

    const { tasks, setUpdateTasks } = useContext(TaskContext);
  
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        desc: ''
      });

      const HandleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
    const { fetchTasks } = useContext(TaskContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const url = ApiUri + 'serverside/wp-json/task-api/v1/task/update';
        const rest = "&id=" + id + "&state=all";
        const queryParams = new URLSearchParams(formData).toString();
        const fullUrl = `${url}?${queryParams + rest}`;
    
       await axios.get(fullUrl)
          .then((response) => {

            const updatedTasks = tasks.map((task) => {
                if (task.task_ID === id) {
                  return {
                    ...task,
                    task_title: formData.title,
                    task_date: formData.date,
                    task_description: formData.desc
                  };
                }
                return task;
              });
            



           fetchTasks(); 
           Ccommand(); // this function for closing the edit form 
          })





    }
    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    const formattedDate = formatDate(task.task_date);




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
                    <textarea  onChange={HandleChange}
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