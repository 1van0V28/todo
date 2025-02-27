import { useId } from "react"
import { DeleteTaskButton } from "../shared/DeleteTaskButton"
import { EditTaskButton } from "../shared/EditTaskButton"
import "../app/styles/styles_widgets.css"


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
                            "task-container task-container--completed" : 
                            "task-container"

    return (
        <div className="task">
            <div className={taskContainerStyle}>
                <div className="checkbox-container">
                    <input 
                    className="checkbox-container__checkbox" 
                    type="checkbox" 
                    id={taskId}
                    checked={props.taskInfo.isCompleted}
                    onChange={handleInputChange}>
                    </input>
                </div>
                <div className="info-container">
                    <label className="info-container__label" htmlFor={taskId}>
                        {props.taskInfo.name ?? "Неизвестная задача..."}
                    </label>
                    <p className="info-container__date">{props.taskInfo.date}</p>
                </div>
            </div>
            
            <div className="buttons-container">
                <DeleteTaskButton handleDeleteClick={handleDeleteClick} />
                <EditTaskButton handleEditClick={handleEditClick} />
            </div>
        </div>
    )
}