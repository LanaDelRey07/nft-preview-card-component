/*import { createButton } from "./assets/createButton";
import { buttonDisabled } from "./assets/buttonDisabled";
import { mount } from "./assets/mount";

const maxCards = 5
const state={
    quantity: maxCards,
}

//Crear botones
createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")*/

const nftCard = document.createElement("div")
nftCard.className = "nft_card"



//Clase top dentro de card
const topCard = document.createElement("div")
topCard.className = "nft_card_top"
nftCard.appendChild(topCard)



const app = document.querySelector("#app")
app.appendChild(nftCard)



// Clase imagen dentro de top
const contimagen = document.createElement("div")
contimagen.className = "img-top"
topCard.appendChild(contimagen)
// Hijos de la clase imagen
const imagone = document.createElement("img")
imagone.src = "./images/image-equilibrium.jpg"
imagone.alt = "Foto de cubo"
contimagen.appendChild(imagone)
const conticono = document.createElement("div")
conticono.className = "img-icon"
contimagen.appendChild(conticono)
const imagtwo = document.createElement("img")
imagtwo.src = "./images/icon-view.svg"
imagtwo.alt = "Icono de ojo"
conticono.appendChild(imagtwo)



// Clase texto dentro de top
const textos = document.createElement("div")
textos.className = "box-text"
topCard.appendChild(textos)
// Hijos de la clase texto
const titulo = document.createElement("a")
titulo.textContent = "Equilibrium #3429"
textos.appendChild(titulo)
const parrafo = document.createElement("p")
parrafo.textContent = "Our Equilibrium collection promotes balance and calm."
textos.appendChild(parrafo)
const precydias = document.createElement("div")
precydias.className = "flex"
textos.appendChild(precydias)
// Hijos de la clase Tbottom
const precio = document.createElement("div")
precio.className = "ethereum"
precydias.appendChild(precio)
// Hijos de la clase vistas
const imagthre = document.createElement("img")
imagthre.src = "./images/icon-ethereum.svg"
imagthre.alt = "Icono de precio"
precio.appendChild(imagthre)
const parrapre = document.createElement("p")
parrapre.textContent = "0.041 ETH"
precio.appendChild(parrapre)
const tiempo = document.createElement("div")
tiempo.className = "dias"
precydias.appendChild(tiempo)
// Hijos de la clase time
const imagfor = document.createElement("img")
imagfor.src = "./images/icon-clock.svg"
imagfor.alt = "Icono de tiempo"
tiempo.appendChild(imagfor)
const parrati = document.createElement("p")
parrati.textContent = "3 days left"
tiempo.appendChild(parrati)
const lineadiv = document.createElement("hr")
lineadiv.className = "linea"
textos.appendChild(lineadiv)
const creador = document.createElement("div")
creador.className = "autor"
textos.appendChild(creador)
// Hijos de la clase datos
const imagfive = document.createElement("img")
imagfive.src = "./images/image-avatar.png"
imagfive.alt = "Foto de perfil"
creador.appendChild(imagfive)
const parradat = document.createElement("p")
parradat.textContent = "Creation of "
creador.appendChild(parradat)
//Hijo de parrafo datos
const person = document.createElement("a")
person.textContent = "Jules Wyvern"
parradat.appendChild(person)