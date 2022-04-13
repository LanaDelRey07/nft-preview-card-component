import { createButton } from "./assets/createButton";
import { buttonDisabled } from "./assets/buttonDisabled";
import { mount } from "./assets/mount";

const maxCards = 5
const state={
    quantity: maxCards,
}

//Crear botones
createButton("Add Card", "addCard")
createButton("Remove Card", "removeCard")