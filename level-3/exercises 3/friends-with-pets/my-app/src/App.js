import './App.css';
import data from './data';
import Friends from './Friends';
import Card from './Card'

const cards = data.map(item => {
  return (
      <Card
          key={item.id}
          item={item}
      />
  )
}) 

const friendsList = data.map((friend, index) => {
  return (
      <Friends
          key={index}
          friend={friend}
          pets={friend.pets}
      />
  )
}) 

function App() {
  return (
    <div className="App">
      {friendsList}
      {cards}
    </div>
  );
}

export default App;