import React, {useState} from "react";
import TaskForm from "./TaskForm";
import '../styles/Tasks.scss';
import deleteIcon from '../SVG/icons8-delete.svg';
import editIcon from "../SVG/icons8-edit.svg"

interface Task {
    id: number;
    name: string;
    status: 'Новая' | 'В работе' | 'Завершена';
    date: string;
}

const Tasks:React.FC=()=>{

    const [tasks, setTasks] = useState<Task[]>([]);
    const [showForm, setShowForm] = useState<Boolean>(false)

    const hanbleShowForm=()=>{
        setShowForm(true)
    }

    const handleAddTask = (newTask: Task) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setShowForm(false); 
      };

    return(
        <div className="tasks">
            <div className="tasks__btn-holder">
                <button className="tasks__add-btn" onClick={hanbleShowForm}>Добавить</button>
            </div>
            {showForm && (
            <div className="modal-overlay"><TaskForm onAddTask={handleAddTask}/></div>)
            }
            {(tasks.length===0)?<div className="tasks__none">Пусто</div>:(<table>
        <thead>
          <tr>
            <th>ID задачи</th>
            <th>Название задачи</th>
            <th>Статус</th>
            <th>Дата создания</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
              <td>
                <div className="edit-btn"><img src={editIcon} alt="Редактировать" /></div>
                <div className="delete-btn"><img src={deleteIcon} alt="Удалить" /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>)}
        </div>
    )
}

export default Tasks