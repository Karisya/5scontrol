import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../redux/slices/showModalSlice";
import { removeTask } from "../redux/slices/tasksSlice";

const Modal:React.FC=()=>{

    const dispatch = useDispatch();
    const { showModal, taskId } = useSelector((state: { showModal: { showModal: boolean; taskId: number | null } }) => state.showModal);

    const handleDeleteYes = () => {
        if (taskId !== null) {
            dispatch(removeTask(taskId)); 
        }
        dispatch(setShowModal({ showModal: false, taskId: null })); 
    };

    const handleDeleteNo = () => {
        dispatch(setShowModal({ showModal: false, taskId: null })); 
    };

    if (!showModal) return null;

    return(
        <div className="modal">
            <div>
                <p>Вы уверены, что хотите удалить задачу?</p>
                <div>
                    <button className="yes-btn" onClick={handleDeleteYes}>Да</button>
                    <button className="no-btn" onClick={handleDeleteNo}>Нет</button>
                </div>
            </div>
        </div>
    )

}

export default Modal

