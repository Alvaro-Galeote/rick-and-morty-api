async function fetchRickAndMortyData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        
        if (!response.ok) {
            throw new Error(`Error al consumir la API: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Recibiendo datos:", data.results);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  fetchRickAndMortyData();
  