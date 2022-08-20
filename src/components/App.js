import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");

  useEffect(() => {
    fetch(`http://localhost:3001/pets`)
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])

  const onChangeType = (value) => {
    setFilters(value)
    console.log(value)
  }

  const onFindPetsClick = () => {
    if(filters === 'all') {
      fetch(`http://localhost:3001/pets`)
      .then(res => res.json())
      .then(data => setPets(data))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters}`)
      .then(res => res.json())
      .then(data => setPets(data))
    }
  }

  const onAdoptPet = (id) => {
    fetch(`http://localhost:3001/pets?id=${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({isAdopted: true})
    })
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
