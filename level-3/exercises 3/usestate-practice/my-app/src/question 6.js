import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const [colors, setColors] = useState(["pink", "blue"])

setColors("green")

// This will end up trying to return a string vrs. the true value it is set for and this doesn't recall the colors in the main function