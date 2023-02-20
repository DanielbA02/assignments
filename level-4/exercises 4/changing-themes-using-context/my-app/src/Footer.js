import React, {useContext} from 'react'
import {ThemeContext} from "./themeContext"

function Footer(props) {
    const {color} = useContext(ThemeContext)

    return (
            <div className={`${color}-theme`}> 
            <div className='footer'>
                <h2>This is the Footer</h2>
            </div>
            </div>
    )
}

export default Footer