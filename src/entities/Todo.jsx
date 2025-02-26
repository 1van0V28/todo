import { ControlPanel } from "../features/ControlPanel"
import { TodoList } from "../features/TodoList"
import "../app/styles/styles_entities.css"


export function Todo() {
    return (
        <main className="todo">
            <ControlPanel />
            <TodoList />
        </main>
    )
}