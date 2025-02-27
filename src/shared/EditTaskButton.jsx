import EditIcon from "@mui/icons-material/Edit"
import "../app/styles/styles_shared.css"


export function EditTaskButton(props) {
    return (
        <button className="task-button task-button--edit" onClick={props.handleEditClick}>
            <EditIcon fontSize="medium" />
        </button>
    )
}