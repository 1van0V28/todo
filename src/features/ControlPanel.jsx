import { AddTaskButton } from "../shared/AddTaskButton"
import { TaskSortSelector } from "../shared/TaskSortSelector"
import "../app/styles/styles_features.css"


export function ControlPanel() {
    return (
        <div className="control_panel">
            <AddTaskButton />
            <TaskSortSelector />
        </div>
    )
}