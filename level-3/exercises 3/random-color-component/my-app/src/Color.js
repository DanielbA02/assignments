import {React, useState, useEffect} from 'react'
import './App.css'

export default function Color(){
    const [color, setColor] = useState({
})

useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => res.json())
        .then(data => setColor(data.colors[0].hex))
}, [])

    return(
        console.log(color),
        <div style={{backgroundColor:`#${color}`,
                    height: '1000px',
                    width: '1263px'}}/>
    )
}