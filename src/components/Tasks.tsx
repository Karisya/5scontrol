import React, {useState} from "react";
import TaskForm from "./TaskForm";

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
            <button onClick={hanbleShowForm}>Добавить</button>
            {showForm && (
            <div><TaskForm onAddTask={handleAddTask}/></div>)
            }
            {(tasks.length===0)?<div>Пусто</div>:(<table>
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
                <button className="edit-btn">Редактировать</button>
                <button className="delete-btn">Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>)}
        </div>
    )
}

export default Tasks