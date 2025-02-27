import "../app/styles/styles_entities.css"


export function Header() {
    return (
        <header className="header">
            <a className="header-link" onClick={() => {window.location.reload()}}>
                <span className="header-link__letter">T</span>
                <span className="header-link__letter">O</span>
                <span className="header-link__letter">D</span>
                <span className="header-link__letter">O</span>
            </a>
        </header>
    )
}