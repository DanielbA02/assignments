import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => {
	return [...prevColors, "green"]
})

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> {
	return {
		count: prevState.count + 1
	}
})