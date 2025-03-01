import CloseIcon from "@mui/icons-material/Close"
import "./task_info.css"


export function TaskInfo(props) {
    const handleCloseClick = function() {
        props.closeTaskInfo()
    }

    const handleInputChange = function(event) {
        props.setTaskInfoState({...props.taskInfoState, [event.target.name]: event.target.value})
    }

    const handleSaveClick = function() {
        props.handleSaveClick(props.taskInfoState)
        props.closeTaskInfo()
    }

    return (
        <dialog className="task_info" ref={props.taskInfoRef}>
            <CloseIcon 
            className="task_info__icon" 
            fontSize="large" 
            onClick={handleCloseClick} />

            <input 
            className="task_info__input" 
            placeholder="Неизвестная задача..."
            name="name"
            value={props.taskInfoState.name ?? ""} 
            onChange={handleInputChange}>
            </input>

            <textarea 
            className="task_info__text" 
            placeholder="Здесь можно описать задачу поодробнее..."
            name="description"
            value={props.taskInfoState.description ?? ""}
            onChange={handleInputChange}>
            </textarea>

            <button 
            className="task_info__save_button" 
            onClick={handleSaveClick}>
                Save changes
            </button>
        </dialog>
    )
}