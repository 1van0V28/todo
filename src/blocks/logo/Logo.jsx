import "./logo.css"


export function Logo() {
    const handleReloadClick = function() {
        window.location.reload()
    }
    
    return (
        <a className="logo" onClick={handleReloadClick}>
            <span className="logo__letter">T</span> {/*span для анимации в перспективе*/}
            <span className="logo__letter">O</span>
            <span className="logo__letter">D</span>
            <span className="logo__letter">O</span>
        </a>
    )
}