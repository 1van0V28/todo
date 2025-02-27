export function TaskInfoInput(props) {
    return (
        <input 
        className="task-info-input" 
        placeholder="Неизвестная задача..."
        name="name"
        value={props.value ?? ""} 
        onChange={props.handleInputChange}>
        </input>
    )
}