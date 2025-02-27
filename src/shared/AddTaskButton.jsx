import "../app/styles/styles_shared.css"


export function AddTaskButton(props) {
    const handleAddClick = function() {
        const taskId = crypto.randomUUID()
        props.openTaskInfo({
            id: taskId,
            isCompleted: false,
            name: null,
            description: null,
            date: null,
        })
    }

    return (
        <button className="add_task" onClick={handleAddClick}>Add Task</button>
    )
}