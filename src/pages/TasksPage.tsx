import React from "react";
import Tasks from "../components/Tasks";
import '../styles/TaskPage.scss';

const TasksPage:React.FC=()=>{

return(
    <div className="task-page">
        <h2 className="task-page__header">Задачи 5S</h2>
        <Tasks/>
    </div>
)
}

export default TasksPage