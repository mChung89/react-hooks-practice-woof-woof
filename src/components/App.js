import React, {useEffect,useState} from "react";
import Dogbar from './Dogbar'
import DoggoSum from './DoggoSum'

function App() {
  const [doggos, setDoggos] = useState([])
  const [showDoggo, setShowDoggo] = useState(null)
  const [filter, setFilter] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(data => setDoggos(data))
  },[])

  function handleGood (newDog) {
    setDoggos(prev => prev.map(dog => dog.id !== newDog.id ? dog : newDog))
    setShowDoggo(newDog)
  }

  function handleFilter() {
    setFilter(prev => !prev)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilter}id="good-dog-filter">Filter good dogs: {filter? "OFF" : "ON"}</button>
      </div>
      <Dogbar setShowDoggo={setShowDoggo} doggos={filter ? doggos: doggos.filter(dog => dog.isGoodDog ? true: null)}/>
      <div id="dog-summary-container">
        <h1>{showDoggo ? "HERE IS DOGGO :)" : "No doggo picked :("}</h1>
        {showDoggo ? <DoggoSum handleGood={handleGood} showDoggo={showDoggo} doggos={doggos}/> : null}
      </div>
    </div>
  );
}

export default App;
