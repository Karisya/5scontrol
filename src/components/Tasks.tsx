import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import '../styles/Tasks.scss';
import deleteIcon from '../SVG/icons8-delete.svg';
import editIcon from "../SVG/icons8-edit.svg"
import { updateTask } from '../redux/slices/tasksSlice';
import { setShowForm } from "../redux/slices/showFormSlice";
import { setEditTask } from "../redux/slices/editTaskSlice";
import { setShowModal } from "../redux/slices/showModalSlice";
import { Task } from "../utilts/utilts";
import Modal from "./Modal";


const Tasks:React.FC=()=>{

    const tasks = useSelector((state: { tasks: { tasks: Task[] } }) => state.tasks.tasks);
    const showForm = useSelector((state: { showForm: { showForm: boolean } }) => state.showForm.showForm);
    const showModal = useSelector((state: { showModal: { showModal: boolean } }) => state.showModal.showModal);

    const [filter, setFilter] = useState<string>("Все");
    const filteredTasks = tasks.filter((task) => {
      if (filter === "Все") return true; 
      return task.status === filter; 
    });

    const dispatch = useDispatch();

    const hanbleShowForm=()=>{
        dispatch(setShowForm(true))
    }

    const handleDeleteTask = (id: number) => {
        dispatch(setShowModal({ showModal: true, taskId: id }));
      };
    
    const handleEditTask = (task: Task) => {
        dispatch(updateTask(task));
        dispatch(setEditTask(task));
        dispatch(setShowForm(true)); 
      };

    return(
        <div className="tasks">
            <div className="tasks__btn-holder">
                <button className="tasks__add-btn" onClick={hanbleShowForm}>Добавить</button>
            </div>
            <select className="tasks__filter" value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option value="Все">Все</option>
          <option value="Новая">Новая</option>
          <option value="В работе">В работе</option>
          <option value="Завершена">Завершена</option>
        </select>
            {showModal&&<div className="modal-overlay"><Modal/></div>}
            {showForm && (
            <div className="modal-overlay"><TaskForm /></div>)
            }
            {<div>
              {tasks.length === 0 ? (
                <div className="tasks__none">Пусто</div>) : (
                  <>
                     {filteredTasks.length === 0 ? (
                         <div className="tasks__none">Нет задач с выбранным статусом</div> ) : (
                  <table>
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
                      {filteredTasks.map((task) => (
                        <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.name}</td>
                          <td>{task.status}</td>
                          <td>{task.date}</td>
                          <td>
                            <div className="edit-btn" onClick={() => handleEditTask(task)}>
                              <img src={editIcon} alt="Редактировать" />
                            </div>
                            <div className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                              <img src={deleteIcon} alt="Удалить" />
                            </div>
                          </td>
                        </tr>
                              ))}
                     </tbody>
                    </table>
      )}
    </>
  )}
</div>
}
        </div>
    )
}

export default Tasks