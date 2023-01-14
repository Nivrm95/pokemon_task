"use strict";

import data from "./pokedex.json" assert { type: "json" };

const allPokemn = document.getElementById("allPokemn");
let i = 0;
function renderList(x) {
  for (let i = x; i < x + 12; i++) {
    //open div//
    let pokemonBox = document.createElement("div");

    // open the modal when clicking the pokemon box
    pokemonBox.addEventListener("click", () => openPokemonModal(data[i]));

    let pokeName = document.createElement("div");
    pokeName.innerHTML = data[i].name.english;
    let pokeNumber = document.createElement("div");
    let pokeImg = document.createElement("img");

    //OpenclassName//
    pokeNumber.className = "Number";
    pokeImg.className = "Img";
    pokeName.className = "Name";
    pokemonBox.className = "pokemonBox";

    //openIdToTheImg//
    pokeImg.id = `imgId${i}`;

    //index and cunter//
    if (data[i].id < 10) {
      pokeNumber.innerHTML = "#0" + data[i].id;
    } else if (data[i].id < 100) {
      pokeNumber.innerHTML = "#00" + data[i].id;
    } else {
      pokeNumber.innerHTML = "#" + data[i].id;
    }
    pokeImg.src = data[i].image.hires;

    //in to appenChild//
    pokemonBox.appendChild(pokeNumber);
    pokemonBox.appendChild(pokeImg);
    pokemonBox.appendChild(pokeName);

    //in to the fucking father- appenChild//
    allPokemn.appendChild(pokemonBox);
  }
}
renderList(i);

//load more//
const loadButton = document.getElementById("load-button");
loadButton.addEventListener("click", (event) => {
  event.preventDefault();
  i += 12;
  renderList(i);
});

//modal//

const pokemonContainer = document.getElementById("pokemon-container");

function openPokemonModal(pokemon) {
  let i = 0;
//open div//
  let modal = document.getElementById("myModal");
  let btn = document.getElementById(`imgId${i}`);
  let pokemonBox = document.createElement("div");
  let pokeName = document.createElement("div");
  let pokeNumber = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeEgg = document.createElement("div");
  let pokemonDetailsBox = document.createElement("div");
  let pokeProfile = document.createElement("div");
  let descriptionBox = document.createElement("div");
  let descriptionTitle = document.createElement("div");
  let descriptionText = document.createElement("p");
  let statsBox = document.createElement("div");

//OpenclassName//
  pokeNumber.className = "Number-box";
  pokeImg.className = "Img-box";
  pokeName.className = "Name-box";
  pokemonBox.className = "all-pokemonbox-modal"
  pokeProfile.className = "all-img";
  pokemonDetailsBox.className ="deta-box"
  descriptionBox.className = "all-description";
  descriptionTitle.className = "description-title"
  descriptionText.className = "description-text";
  statsBox.className = "statsBox";
  pokeEgg.className = "pokeEgg";
 

// open modal function
  btn.onclick = function () {
    close();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      close();
    }
  };

  function close() {
    modal.style.display = "none";

  // cleanup
    pokemonBox.innerHTML = "";
  }

  if ((modal.style.display = "block")) {
    pokeName.innerHTML = pokemon.name.english;

    descriptionTitle.innerHTML = "Description";
    descriptionText.innerHTML = pokemon.description;

    for (let stat of Object.keys(pokemon.base)) {
      let statBox = document.createElement("div");
      let statTitle = document.createElement("p");
      let statValue = document.createElement("p");
      statTitle.innerHTML = stat;
      statValue.innerHTML = pokemon.base[stat];
      statBox.appendChild(statTitle);
      statBox.appendChild(statValue);
      statsBox.appendChild(statBox);
    }

    for (let egg of pokemon.profile.egg) {
      let eggBox = document.createElement("div");

    // add class to egg
      eggBox.className = egg;
      eggBox.innerHTML = egg;
      pokeEgg.appendChild(eggBox);
      
    }
 
    descriptionBox.appendChild(descriptionTitle);
    descriptionBox.appendChild(descriptionText);
    pokeProfile.appendChild(pokeNumber);
    pokeProfile.appendChild(pokeImg);
    pokeProfile.appendChild(pokeName);
    pokeProfile.appendChild(pokeEgg);
    pokemonBox.appendChild(pokeProfile);
    pokemonDetailsBox.appendChild(statsBox);
    pokemonDetailsBox.appendChild(descriptionBox);
    pokemonBox.appendChild(pokemonDetailsBox);
    pokemonContainer.appendChild(pokemonBox);

    if (data[i].id < 10) {
      pokeNumber.innerHTML = "#00" + pokemon.id;
    } else if (data[i].id < 100) {
      pokeNumber.innerHTML = "#0" + pokemon.id;
    } else {
      pokeNumber.innerHTML = "#" + pokemon.id;
    }

    pokeImg.src = pokemon.image.hires;
  }
}
