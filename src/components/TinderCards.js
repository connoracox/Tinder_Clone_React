import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card';
// import database from "./firebase";
import './TinderCards.css'


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Penn Badgley',
            url:'https://variety.com/wp-content/uploads/2023/03/You_S4_E7_2348576_R.jpg?w=681&h=383&crop=1&resize=681%2C383'
        },
        {
            name: 'Trevor Noah',
            url:'https://variety.com/wp-content/uploads/2021/03/Trevor-Noah-2.jpg?w=681&h=383&crop=1'
        }    
        ])
    // const people = [];
    // Piece of code that runs based on a condition
    useEffect(() => {
        // database.collection('people').onSnapshot(snapshot => (
        //     setPeople(snapshot.docs.map(doc => doc.data()))
        // ))
    }, [])

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="cardContainer">
            { people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            )) }
            </div>
        </div>
    )
}

export default TinderCards