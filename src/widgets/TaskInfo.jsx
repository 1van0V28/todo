import CloseIcon from "@mui/icons-material/Close"
import { TaskInfoInput } from "../shared/TaskInfoInput"
import { TaskInfoText } from "../shared/TaskInfoText"
import { SaveChangesButton } from "../shared/SaveChangesButton"


export function TaskInfo(props) {
    const handleCloseClick = function() {
        props.closeTaskInfo()
    }

    const handleInputChange = function(event) {
        props.setTaskInfoState({...props.taskInfoState, [event.target.name]: event.target.value})
    }

    return (
        <dialog className="task-info" ref={props.taskInfoRef}>
            <CloseIcon className="task-info__icon" fontSize="large" onClick={handleCloseClick} />
            <TaskInfoInput handleInputChange={handleInputChange} value={props.taskInfoState.name} />
            <TaskInfoText handleInputChange={handleInputChange} value={props.taskInfoState.description} />
            <SaveChangesButton handleSaveClick={() => {props.handleSaveClick(props.taskInfoState)}}/>
        </dialog>
    )
}