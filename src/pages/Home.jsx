import { useState, useRef } from "react"
import { Header } from "../entities/Header"
import { Todo } from "../entities/Todo"
import { TaskInfo } from "../widgets/TaskInfo"


export function Home() {
    const [todoState, setTodoState] = useState(JSON.parse(localStorage.getItem("todoList")) ?? {})
    const [taskInfoState, setTaskInfoState] = useState({
        id: null,
        isCompleted: false,
        name: null,
        description: null,
        date: null,
    })
    const taskInfoRef = useRef(null)

    const openTaskInfo = function(taskInfo) {
        setTaskInfoState(taskInfo)
        taskInfoRef.current.show()
    }

    const closeTaskInfo = function() {
        taskInfoRef.current.close()
    }

    const deleteTask = function(taskId) {
        const newTodoState = {...todoState}
        delete newTodoState[taskId]

        setTodoState(newTodoState)
        localStorage.setItem("todoList", JSON.stringify(newTodoState))

    }

    const handleSaveClick = function(taskInfo) {
        if (!taskInfo.date) {
            const date = new Date()
            const formattedTime = new Intl.DateTimeFormat("ru", {timeStyle: "short"}).format(date)
            const formattedDate = new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(date)
            taskInfo.date = `${formattedTime}, ${formattedDate}`
        }
        setTodoState({...todoState, [taskInfo.id]: taskInfo})
        localStorage.setItem("todoList", JSON.stringify({...todoState, [taskInfo.id]: taskInfo}))
    }

    return (
        <>
            <Header /> 
            <Todo todoState={todoState} 
            openTaskInfo={openTaskInfo}
            deleteTask={deleteTask}
            handleSaveClick={handleSaveClick} />
            <TaskInfo 
            taskInfoRef={taskInfoRef}
            taskInfoState={taskInfoState}
            setTaskInfoState={setTaskInfoState} 
            handleSaveClick={handleSaveClick}
            closeTaskInfo={closeTaskInfo} />
        </>
    )
}