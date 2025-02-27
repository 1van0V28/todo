import { Task } from "../widgets/Task"
import "../app/styles/styles_features.css"


export function TodoList(props) {
    const todoList = Object.keys(props.todoState).map((task) => {
        const todoKey = crypto.randomUUID()
        if (props.listState === "all") {
            return (
                <Task 
                key={todoKey} 
                taskInfo={props.todoState[task]} 
                openTaskInfo={props.openTaskInfo}
                deleteTask={props.deleteTask}
                handleSaveClick={props.handleSaveClick} />
            )
        } else if (props.listState === "completed" && props.todoState[task].isCompleted) {
            return (
                <Task 
                key={todoKey} 
                taskInfo={props.todoState[task]} 
                openTaskInfo={props.openTaskInfo}
                deleteTask={props.deleteTask}
                handleSaveClick={props.handleSaveClick} />
            )
        } else if (props.listState === "unfinished" && !props.todoState[task].isCompleted) {
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