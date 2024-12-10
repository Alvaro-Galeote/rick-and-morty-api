async function fetchRickAndMortyData() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
  
      if (!response.ok) {
        throw new Error(`Error al consumir la API: ${response.status}`);
      }
  
      const data = await response.json();
  
      const aliveCharacters = data.results
        .filter(character => character.status === "Alive") 
        .map(character => ({
          ...character,
          name: character.name.replace(/ /g, "_"), 
        }));
  
      console.log("Personajes que tienen Alive con nombres modificados:", aliveCharacters);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchRickAndMortyData();
  