import React from 'react'

function Dogbar ({doggos, setShowDoggo}) {
    
    function handleClick (e) {
        //find doggo with id in doggos
        const selectedDoggo = doggos.find(dog => dog.id === parseInt(e.target.id))
        setShowDoggo(selectedDoggo)
    }
    
    const dogBarRender = doggos.map((dog) => {
      return <span onClick={handleClick} id={dog.id} key={dog.id}>{dog.name}</span>;
    });
    return (
        <div id="dog-bar">
            {dogBarRender}
        </div>
        )
}
 
export default Dogbar