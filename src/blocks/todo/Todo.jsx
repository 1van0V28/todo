import { useState } from "react"
import { ControlPanel } from "../control_panel/ControlPanel"
import { TodoList } from "../todo_list/TodoList"
import "./todo.css"


export function Todo(props) {
    const [listState, setListState] = useState("all")
    
    return (
        <main className="todo">
            <ControlPanel 
            openTaskInfo={props.openTaskInfo} 
            setListState={setListState} />
            <TodoList 
            listState={listState}
            todoState={props.todoState} 
            openTaskInfo={props.openTaskInfo}
            deleteTask={props.deleteTask}
            handleSaveClick={props.handleSaveClick} />
        </main>
    )
}