import 'bulma/css/bulma.css';
import { useEffect, useContext, useCallback } from "react";
import Modal from './Components/modal';
import TaskList from './Components/tasksList';
import TaskContext from "./Context/tasks";


function App() {
  const { fetchTasks } = useContext(TaskContext);

  const StablingfetchTasks = useCallback(fetchTasks, []);

  useEffect(() => {
    StablingfetchTasks();
  }, [StablingfetchTasks]);



  return <div className="mainContainer">
    <section className="section">
      <div className="columns">
        <div className="column is-four-fifths">
          <TaskList />
        </div>
        <div className="column"></div>
        <div className="column"><Modal /></div>
      </div>

    </section>

  </div>


}
export default App;