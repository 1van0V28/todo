import { Header } from "../entities/Header"
import { Todo } from "../entities/Todo"
import { TaskInfo } from "../widgets/TaskInfo"


export function Home() {
    return (
        <>
            <Header /> 
            <Todo />
            <TaskInfo />
        </>
    )
}