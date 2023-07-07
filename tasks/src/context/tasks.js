import { createContext, useState, useCallback } from "react";
import axios from "axios";
import { ApiUri } from '../Constants/Constants';


const TaskContext = createContext();

function Provider({ children }) {
   
    //Please Change That To Your LocalHost...
    let uri = ApiUri + 'serverside/wp-json/task-api/v1/task';
    
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        const response = await axios.get(uri);
        setTasks(response.data.task);
      }, []);

    //Fixing Callbacks in browser====
    const StabledfetchTasks = useCallback(fetchTasks, []);

    const editTaskById = async (id, newTitle) => {

        const response = await axios.put((uri + "/" + id), {
            title: newTitle
        });

        //i can do this : fetchTasks();
        //But this is better and lighter===========================
        const updatetasks = tasks.map((task) => {
            if (id === task.task_ID && newTitle !== '') {
                return { ...task, ...response.data.task }
            }
            return task;
        })
        setTasks(updatetasks);
        //===========================================================
    };


    const deletetaskById = async (id) => {
        const response = await axios.delete(uri + "/" + id);
        const updatetasks = tasks.filter((task) => {
          return id !== task.task_ID;
        });
        setTasks(updatetasks);
      };

    const creattask = async (title) => {

        if (title !== '') {
            const response = await axios.post(uri, {
                title
            });
            //console.log(response);

            const updateBoos = [
                ...tasks,
                response.data.task
            ];

            setTasks(updateBoos)
        }

    };
    const valueToShare = {
        tasks,
        deletetaskById,
        editTaskById,
        fetchTasks,
        creattask

    };

    return (
        <TaskContext.Provider value={valueToShare} >
            {children}
        </TaskContext.Provider>
    );
}

export { Provider };
export default TaskContext;