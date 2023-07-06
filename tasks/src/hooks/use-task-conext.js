import { useContext } from "react";
import taskContext from "../context/tasks";

function useTasksContext () {
    return   useContext(taskContext);
}
export default useTasksContext;