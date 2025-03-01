import "./control_panel.css"


export function ControlPanel(props) {
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

    const handleSelectorChange = function(event) {
        props.setListState(event.target.value)
    }

    return (
        <div className="control_panel">
            <button className="control_panel__add_task" onClick={handleAddClick}>Add Task</button>
            <select className="task_sort" onChange={handleSelectorChange}>
                <option className="task_sort__option" value="all">All</option>
                <option className="task_sort__option" value="completed">Only completed</option>
                <option className="task_sort__option" value="unfinished">Only unfinished</option>
            </select>
        </div>
    )
}