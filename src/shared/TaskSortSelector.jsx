import "../app/styles/styles_shared.css"


export function TaskSortSelector(props) {
    const handleSelectorChange = function(event) {
        props.setListState(event.target.value)
    }

    return (
        <select className="task-sort" onChange={handleSelectorChange}>
            <option className="task-sort__option" value="all">All</option>
            <option className="task-sort__option" value="completed">Only completed</option>
            <option className="task-sort__option" value="unfinished">Only unfinished</option>
        </select>
    )
}