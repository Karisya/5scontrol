import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import '../styles/Tasks.scss';
import deleteIcon from '../SVG/icons8-delete.svg';
import editIcon from "../SVG/icons8-edit.svg"
import { addTask, removeTask, updateTask } from '../redux/slices/tasksSlice';

interface Task {
    id: number;
    name: string;
    status: 'Новая' | 'В работе' | 'Завершена';
    date: string;
}

const Tasks:React.FC=()=>{

    const tasks = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
    console.log(tasks)
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState<Boolean>(false)
    const [editTask, setEditTask] = useState<Task | null>(null);

    const hanbleShowForm=()=>{
        setShowForm(true)
    }

    const handleAddTask = (newTask: Task) => {
        dispatch(addTask(newTask));
        setShowForm(false); 
      };

    const handleDeleteTask = (id: number) => {
        dispatch(removeTask(id));
      };
    
    const handleEditTask = (task: Task) => {
        dispatch(updateTask(task));
        setEditTask(task);
        setShowForm(true); 
      };

    const handleUpdateTask=(task: Task)=>{
      dispatch(updateTask(task)); 
      setEditTask(null); 
      setShowForm(false); 
    }

    return(
        <div className="tasks">
            <div className="tasks__btn-holder">
                <button className="tasks__add-btn" onClick={hanbleShowForm}>Добавить</button>
            </div>
            {showForm && (
            <div className="modal-overlay"><TaskForm 
            onAddTask={handleAddTask}
            handleUpdateTask={ handleUpdateTask}
            task={editTask}
            /></div>)
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
                <div className="edit-btn" onClick={() => handleEditTask(task)}><img src={editIcon} alt="Редактировать" /></div>
                <div className="delete-btn" onClick={() => handleDeleteTask(task.id)}><img src={deleteIcon} alt="Удалить" /></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>)}
        </div>
    )
}

export default Tasks