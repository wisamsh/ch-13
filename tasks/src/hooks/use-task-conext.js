import { useContext } from "react";
import taskContext from "../Context/tasks";

function useTasksContext () {
    return   useContext(taskContext);
}
export default useTasksContext;