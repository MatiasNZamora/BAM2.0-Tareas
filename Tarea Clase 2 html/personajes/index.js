
const personajes = document.getElementById('lista');

const getPersonajes = async() => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    const Data = await response.json();
    const item = Data.results;

    console.log(item);
    item.forEach((element) => {
        console.log(element)
    const li = document.createElement("li");
    li.innerHTML = `
        <h2> ${element.name} </h2>
        <img src=${element.image} alt=${element.name} />
        <p> Origen: ${element.origin.name} </p>
        <p> Especie: ${element.species} </p>
    `;
    lista.append(li);
})
};

getPersonajes();



