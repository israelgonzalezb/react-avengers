import React from "react";
import logo from "./logo.svg";
import "./App.css";

const avengers = [
  "Thor",
  "Iron Man",
  "Ant-Man a.k.a. Giant-Man, Goliath, Yellowjacket, The Wasp",
  "The Wasp",
  "Hulk",
  "Captain America a.k.a. Nomad, The Captain",
  "Hawkeye a.k.a. Goliath, Ronin",
  "Quicksilver",
  "Scarlet Witch",
  "Hercules",
  "Black Panther",
  "Black Knight",
  "Black Widow (Claire Voyant)",
  "Swordsman",
  "Mantis",
  "Beast",
  "Moondragon",
  "Patsy Walker",
  "Wonder Man",
  "Two-Gun Kid",
  "Ms. Marvel a.k.a. Binary, Warbird",
  "Falcon",
  "Tigra a.k.a. The Cat",
  "She-Hulk",
  "Captain Marvel a.k.a. Photon, Pulsar",
  "Starfox",
  "Namor",
  "Doctor Druid",
  "Mockingbird",
  "War Machine a.k.a. Iron Man II",
  "Thing",
  "Moon Knight",
  "Firebird",
  "U.S. Agent a.k.a. Super-Patriot, Captain America",
  "Human Torch",
  "Living Lightning",
  "Spider-Woman a.k.a. Arachne",
  "Machine Man a.k.a. X-51",
  "Darkhawk",
  "Demolition Man a.k.a. D-Man",
  "Forgotten One",
  "Mister Fantastic",
  "Invisible Woman",
  "Quasar",
  "Sersi",
  "Stingray",
  "Spider-Man",
  "Sandman",
  "Rage",
  "Crystal",
  "Thunderstrike a.k.a. Thor II",
  "Justice a.k.a. Marvel Boy",
  "Firestar",
  "Triathlon a.k.a. 3-D Man",
  "Silverclaw",
  "Jack of Hearts",
  "Ant-Man (Eric O'Grady)",
  "Captain Britain a.k.a. Lionheart",
  "Luke Cage a.k.a. Power Man",
  "Wolverine",
  "Sentry",
  "Echo a.k.a. Ronin",
  "Ares",
  "Amadeus Cho",
  "Jocasta",
  "Stature",
  "Vision a.k.a. Iron Lad",
  "Maria Hill",
  "Valkyrie",
  "Nova (Richard Rider)",
  "Sharon Carter",
  "Iron Fist",
  "Xorr the God-Jewel",
  "Victoria Hand",
  "Rick Jones",
  "Captain Marvel",
  "Whizzer",
  "Marrina",
  "Yellowjacket",
  "Magdalene",
  "Deathcry",
  "Moira Brandon",
  "Masque",
  "Doctor Strange",
  "Yondu",
  "Martinex",
  "Charlie-27",
  "Nikki",
  "Starhawk",
  "Aleta Ogord",
  "Vance Astro",
  "Ravonna a.k.a.",
  "Hawkeye (Kate Bishop)"
];

function App() {
  return (
    <div className="App">
      <ol>
        {avengers.map(x => {
          return (
          <li>{x}</li>
            )
        })
        }
      </ol>
    </div>
  );
}

export default App;
