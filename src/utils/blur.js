// Recebendo elementos para trabalhar o desfoque
const aside = document.querySelector("aside")
const main = document.querySelector("main")
const button = document.getElementById("new-schedule-btn")

// Criando lista com elementos
const elementsToBlur = [aside, main, button]

// Criando função para desfoque
export function toggleBlur(state) {

    // Se state for true, aplica blur. Se false, remove.
    const filterValue = state ? "blur(5px)" : "none";
    const pointerValue = state ? "none" : "auto";

    elementsToBlur.forEach((element) => {
        if (element) { // Verificação de segurança caso o elemento não exista
            element.style.filter = filterValue;
            element.style.pointerEvents = pointerValue;
        }
    });
}