import { useState } from "react"
import { ControlPanel } from "../features/ControlPanel"
import { TodoList } from "../features/TodoList"
import "../app/styles/styles_entities.css"


export function Todo(props) {
    const [listState, setListState] = useState("all")
    
    return (
        <main className="todo">
            <ControlPanel openTaskInfo={props.openTaskInfo} setListState={setListState}/>
            <TodoList 
            listState={listState}
            todoState={props.todoState} 
            openTaskInfo={props.openTaskInfo}
            deleteTask={props.deleteTask}
            handleSaveClick={props.handleSaveClick} />
        </main>
    )
}