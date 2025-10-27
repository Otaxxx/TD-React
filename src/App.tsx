import React, { useState, useEffect } from "react";
import superHerosData from "./SuperHeros.json";

const App: React.FC = () => {
  const nom = "Toto";
  const [compteur, setCompteur] = useState(0);
  const [search, setSearch] = useState("");

  
  const superHeros = superHerosData.superheros;

  useEffect(() => {
    document.title = `Compteur: ${compteur}`;
  }, [compteur]);

  // Filtrer les super-héros selon la recherche
  const filteredHeros = superHeros.filter(hero =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Bonjour {nom}, je découvre React !</h1>
      <h2>Compteur : {compteur}</h2>
      <button onClick={() => setCompteur(compteur + 1)}>+</button>
      <button onClick={() => setCompteur(0)}>Réinitialiser</button>

      <h2>Il y a {superHeros.length} super-héros dans la base.</h2>

      <input
        type="text"
        placeholder="Rechercher un super-héros"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredHeros.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

