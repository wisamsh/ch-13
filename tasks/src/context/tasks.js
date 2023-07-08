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

   
    
    const valueToShare = {
        tasks,
        fetchTasks,
        

    };

    return (
        <TaskContext.Provider value={valueToShare} >
            {children}
        </TaskContext.Provider>
    );
}

export { Provider };
export default TaskContext;