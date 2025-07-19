async function peticionChiste() { 
    try{
const URL = "https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=religious"
    const respuesta = await fetch(URL)
    const datos = await respuesta.json()
        const rendeChiste = document.getElementById('broma');
    rendeChiste.innerHTML = '';
        const panel = document.createElement('div');
        panel.className = ''
        panel.innerHTML = `
          <h5>Categoría: ${datos.category}</h5>
          <p>${datos.joke ? `${datos.joke}`:``}</p>
          <p>${datos.setup ? `${datos.setup}`:``}</p>
          <p>${datos.delivery ? `${datos.delivery}`:``}</p>
        `;
         rendeChiste.appendChild(panel); 
return 
    } catch (error) {
      console.error(error);
      return { error: "Error en la Petición" };
    }
  }
  peticionChiste()

function existenciaJoke (datosApi){
if(datosApi.joke !== undefined){
  return datosApi.joke
} else{
  return ""
}
}

function existenciaSetup (datosApi){
if(datosApi.setup !== undefined){
  return datosApi.setup
} else{
  return ""
}
}
function existenciaDelivery (datosApi){
if(datosApi.delivery !== undefined){
  return datosApi.delivery
} else{
  return ""
}
}
