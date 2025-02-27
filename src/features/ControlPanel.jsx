import { AddTaskButton } from "../shared/AddTaskButton"
import { TaskSortSelector } from "../shared/TaskSortSelector"
import "../app/styles/styles_features.css"


export function ControlPanel(props) {
    return (
        <div className="control_panel">
            <AddTaskButton openTaskInfo={props.openTaskInfo}/>
            <TaskSortSelector setListState={props.setListState}/>
        </div>
    )
}