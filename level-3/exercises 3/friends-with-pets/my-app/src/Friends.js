import React from 'react'
import Pets from './Pets'

export default function Friends(props) {
    let {pets} = props
    pets = pets.map((pet, index) => {
        return (
            <Pets 
                key={index}
                name={pet.name}
                breed={pet.breed}
            />
        )
    })
    return (
        <div className="friendList">
            <h1>{props.friend.name}</h1>
            <h1>{props.friend.age}</h1>
            {pets}
        </div>
    )
}