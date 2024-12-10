//Consumir API
async function fetchAPI(url) {
    const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Error al consumir la API: ${response.status}`);
        }
  
    return response.json();
  }
  
  //Formatear respuesta
  function processCharacters(data) {
    return data.results
      .filter(character => character.status === "Alive") 
      .map(character => ({
        id: character.id,
        name: character.name.replace(/ /g, "_"),
        status: character.status,
        gender: character.gender,
      }));
  }
  
  // Función principal
  async function fetchRickAndMortyData() {
    const API_URL = "https://rickandmortyapi.com/api/character";
    try {
        const data = await fetchAPI(API_URL);
        const results = processCharacters(data);

        console.log("JSON final:", { results });
    
    } catch (error) {
        console.error("Error:", error.message);
    }
  }
  
  fetchRickAndMortyData();
  