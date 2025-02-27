import DeleteIcon from '@mui/icons-material/Delete';


export function DeleteTaskButton(props) {
    return (
        <button className="task-button task-button--delete" onClick={props.handleDeleteClick}>
            <DeleteIcon fontSize="medium" />
        </button>
    )
}