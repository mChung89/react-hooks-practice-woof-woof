import React from "react";

function DoggoSum({ showDoggo, handleGood }) {
  const { id, name, image, isGoodDog } = showDoggo;
  function handleClick(e) {
    fetch(`http://localhost:3001/pups/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ isGoodDog: !isGoodDog }),
    })
      .then((res) => res.json())
      .then((data) => handleGood(data));
  }

  return (
    <div id="dog-info">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={handleClick} id={id}>
        {isGoodDog ? "Good Dog" : "Worst Dog Ever"}
      </button>
    </div>
  );
}

export default DoggoSum;
