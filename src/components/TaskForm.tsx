import React, {useState} from "react";
import '../styles/TaskForm.scss';

interface TaskFormProps {
    onAddTask: (task: { id: number; name: string; status: 'Новая' | 'В работе' | 'Завершена'; date: string }) => void;
  }

const TaskForm:React.FC<TaskFormProps>=({ onAddTask })=>{

    const [name, setName] = useState("");
    const [status, setStatus] = useState<'Новая' | 'В работе' | 'Завершена'>('Новая');
    const [date, setDate] = useState("");

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        if (!name || !date) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        const newTask = {
            id: Date.now(),
            name,
            status,
            date,
          };
      
          onAddTask(newTask);
      
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
                <button type="submit" onClick={handleSubmit}>Добавить задачу</button>
            </div>
        </form>
    )
}

export default TaskForm