import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { ApiUri } from '../Constants/Constants';

const TaskContext = createContext();

function Provider({ children }) {
    // Please Change That To Your LocalHost...
    let uri = ApiUri + 'serverside/wp-json/task-api/v1/task';

    const [tasks, setTasks] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    const fetchTasks = useCallback(async () => {
        const response = await axios.get(uri);
        setTasks(response.data.task);

    }, []);

    const filterTasks = useCallback(async (com) => {
        if (com === 'completed') {
            const response = await axios.get(uri);
            const filteredTasks = response.data.task.filter(
                (task) => task.task_status === true
            );
            setTasks(filteredTasks);
        } else if (com === 'uncompleted') {
            const response = await axios.get(uri);
            const filteredTasks = response.data.task.filter(
                (task) => task.task_status === false
            );
            setTasks(filteredTasks);
        } else {
            fetchTasks();
        }
    }, [fetchTasks]);





    const updateTask = useCallback((taskId, updatedTaskData) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.task_ID === taskId) {
                    return { ...task, ...updatedTaskData };
                }
                return task;
            });
        });
    }, []);



    //Sorting : ===========================================================================================


    const sortTasksById = useCallback(() => {
        setTasks((prevTasks) => {
            const sortedTasks = [...prevTasks].sort((a, b) => a.task_ID - b.task_ID);
            return sortedTasks;
        });
    }, []);


    const sortTasksByTitle = useCallback(() => {
        setTasks((prevTasks) => {
            const sortedTasks = [...prevTasks].sort((a, b) =>
                a.task_title.localeCompare(b.task_title)
            );
            return sortedTasks;
        });
    }, []);


    const sortTasksByStatus = useCallback(() => {
        setTasks((prevTasks) => {
            const sortedTasks = [...prevTasks].sort((a, b) => {
                if (a.task_status === b.task_status) {
                    return 0;
                } else if (a.task_status) {
                    return -1;
                } else {
                    return 1;
                }
            });
            return sortedTasks;
        });
    }, []);

    const sortTasksByDate = useCallback(() => {
        setTasks((prevTasks) => {
            const sortedTasks = [...prevTasks].sort((a, b) => {
                const dateA = new Date(a.task_date.split('/').reverse().join('/'));
                const dateB = new Date(b.task_date.split('/').reverse().join('/'));
                return dateA - dateB;
            });
            return sortedTasks;
        });
    }, []);


    const sortTasksByDescription = useCallback(() => {
        setTasks((prevTasks) => {
            const sortedTasks = [...prevTasks].sort((a, b) => {
                if (a.task_description < b.task_description) {
                    return -1;
                } else if (a.task_description > b.task_description) {
                    return 1;
                }
                return 0;
            });
            return sortedTasks;
        });
    }, []);

    const sortascdescTasks = () => {
        setTasks((prevTasks) => [...prevTasks].reverse());
    };


    const valueToShare = {
        tasks,
        fetchTasks,
        updateTask,
        filterTasks,
        sortTasksById,
        sortTasksByTitle,
        sortTasksByStatus,
        sortTasksByDate,
        sortTasksByDescription,
        sortascdescTasks

    };

    return (
        <TaskContext.Provider value={valueToShare} >
            {children}
        </TaskContext.Provider>
    );
}

export { Provider };
export default TaskContext;

