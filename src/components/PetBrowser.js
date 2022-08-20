import React from "react";

import Pet from "./Pet";

function PetBrowser( { pets, onAdoptPet }) {
    const petList = pets.map((pet, i) => <Pet pet={pet} key={i} onAdoptPet={onAdoptPet}/>) 


  return <div className="ui cards">
    {petList}
    </div>;
}

export default PetBrowser;
