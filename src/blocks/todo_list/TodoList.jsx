import { Task } from "./todo_list__task/Task"
import "./todo_list.css"


const isInList= function(listState, isCompleted) {
    if (listState === "all") {
        return true
    } else if (listState === "completed" && isCompleted) {
        return true
    } else if (listState === "unfinished" && !isCompleted) {
        return true
    } else {
        return false
    }
}


export function TodoList(props) {
    const todoList = Object.keys(props.todoState).map((task) => {
        const todoKey = crypto.randomUUID()
        if (isInList(props.listState, props.todoState[task].isCompleted)) {
            return (
                <Task 
                key={todoKey} 
                taskInfo={props.todoState[task]} 
                openTaskInfo={props.openTaskInfo}
                deleteTask={props.deleteTask}
                handleSaveClick={props.handleSaveClick} />
            )
        }
    })

    return (
        <div className="todo_list">
            {todoList} 
        </div>
    )
}