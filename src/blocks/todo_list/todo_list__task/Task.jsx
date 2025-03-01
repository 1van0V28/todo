import { useId } from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import "./todo_list__task.css"


export function Task(props) {
    const taskId = useId()
    
    const handleDeleteClick = function() {
        props.deleteTask(props.taskInfo.id)
    }

    const handleEditClick = function() {
        props.openTaskInfo(props.taskInfo)
    }

    const handleInputChange = function(event) {
        props.handleSaveClick({...props.taskInfo, isCompleted: event.target.checked})
    }

    const taskContainerStyle = props.taskInfo.isCompleted ?
    "todo_list__task_container--completed" :
    "todo_list__task_container"

    return (
        <div className="todo_list__task">
            <div className={taskContainerStyle}>
                <div className="todo_list__checkbox_container">
                    <input 
                    className="todo_list__checkbox" 
                    type="checkbox" 
                    id={taskId}
                    checked={props.taskInfo.isCompleted}
                    onChange={handleInputChange}>
                    </input>
                </div>

                <div className="todo_list__info_container">
                    <label className="todo_list__label" htmlFor={taskId}>
                        {props.taskInfo.name ?? "Неизвестная задача..."}
                    </label>
                    <p>{props.taskInfo.date}</p>
                </div>
            </div>
            
            <div className="todo_list__buttons_container">
                <button className="todo_list__task_button todo_list__task_button--delete" onClick={handleDeleteClick}>
                    <DeleteIcon fontSize="medium" />
                </button>

                <button className="todo_list__task_button todo_list__task_button--edit" onClick={handleEditClick}>
                    <EditIcon fontSize="medium" />
                </button>
            </div>
        </div>
    )
}