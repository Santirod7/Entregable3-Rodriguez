async function fraseInspiradora() { 
    try{
const URL = "https://opentdb.com/api.php?amount=2&difficulty=medium"
    const respuesta = await fetch(URL)
    const datos = await respuesta.json()
    return datos.results
    } catch (error) {
      console.error(error);
      return { error: "Error en la Petición" };
    }
  }

const frases = fraseInspiradora()
