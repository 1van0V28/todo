export function TaskInfoText(props) {
    return (
        <textarea 
        className="task-info-text" 
        placeholder="Здесь можно описать задачу поодробнее..."
        name="description"
        value={props.value ?? ""}
        onChange={props.handleInputChange}>
        </textarea>
    )
}