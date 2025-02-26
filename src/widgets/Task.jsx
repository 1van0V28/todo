import { DeleteTaskButton } from "../shared/DeleteTaskButton"
import { EditTaskButton } from "../shared/EditTaskButton"
import "../app/styles/styles_widgets.css"


export function Task() {
    return (
        <div className="task">
            <div className="task-container">
                <div className="task-container-checkbox-container">
                    <input className="task-container-checkbox-container__checkbox" type="checkbox"></input>
                </div>

                <div className="task-container-info-container">
                    <label>Задача</label> {/* связать с input */}
                    <p>Дата создания</p>
                </div>
            </div>
            
            <div>
                <DeleteTaskButton />
                <EditTaskButton />
            </div>
        </div>
    )
}