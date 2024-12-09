import React, {useState, useEffect} from "react";
import '../styles/TaskForm.scss';
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, updateTask } from '../redux/slices/tasksSlice';
import { setShow } from "../redux/slices/showSlice";
import { setEditTask } from "../redux/slices/editTaskSlice";

interface Task {
    id: number;
    name: string;
    status: 'Новая' | 'В работе' | 'Завершена';
    date: string;
  }
  
const TaskForm:React.FC=()=>{

  const task = useSelector((state: { editTask: { editTask: null | Task } }) => state.editTask.editTask);
  const dispatch=useDispatch();

    const [name, setName] = useState("");
    const [status, setStatus] = useState<'Новая' | 'В работе' | 'Завершена'>('Новая');
    const [date, setDate] = useState("");


    useEffect(() => {
        if (task) {
          setName(task.name);
          setStatus(task.status);
          setDate(task.date);
        }
      }, [task]);

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        if (!name || !date) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        const newTask = {
            id: task ? task.id : Date.now(), 
            name,
            status,
            date,
          };
      
          if (task) {
            dispatch(updateTask(newTask)); 
            dispatch(setEditTask(null));
            dispatch(setShow(false))
          } else {
            dispatch(addTask(newTask)); 
            dispatch(setShow(false))
          }

          setName("");
          setStatus("Новая");
          setDate("");
    }
    return(
        <form className="task-form">
            <div className="task-form__holder">
                <label>Название:</label>
                <input id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Статус:</label>
                <select id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Новая' | 'В работе' | 'Завершена')}>
                <option value="Новая">Новая</option>
                <option value="В работе">В работе</option>
                <option value="Завершена">Завершена</option>
                </select>
                <label>Дата:</label>
                <input id="date" value={date} type="date" onChange={(e)=>setDate(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>{task ? "Редактировать" : "Добавить"}</button>
            </div>
        </form>
    )
}

export default TaskForm