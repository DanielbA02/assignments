import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Main(props) {
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
        <div className="main">
            <h1>Toggle themes here!</h1>
            <h3>It is currently {color} mode</h3>
            <button onClick={toggleTheme} className={`${color}-button`}>Change Theme</button>
        </div>
        </div>
    )
}

export default Main