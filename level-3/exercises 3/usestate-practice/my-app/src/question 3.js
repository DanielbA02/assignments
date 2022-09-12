import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(people = 
    {
        firstName: "Joe",
        lastName: "Schmoe",
    }
)