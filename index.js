async function fetchRickAndMortyData() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
  
      if (!response.ok) {
        throw new Error(`Error al consumir la API: ${response.status}`);
      }
  
      const data = await response.json();
      //console.log("Recibiendo datos:", data.results);

      const aliveCharacters = data.results.filter(character => character.status === "Alive");
      
      console.log("Personajes con Alive:", aliveCharacters);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchRickAndMortyData();
  