// Importando o módulo de DAYJS
import dayjs from "dayjs";

// Recebendo o elemento de seletor de data da agenda
const selectedDate = document.getElementById("agenda-date-selector")

// Recebendo data atual
const currentDate = dayjs().format("YYYY-MM-DD")

// Carregando a data atual do atendimento e define a data mínima para atendimento
selectedDate.value = selectedDate.min = currentDate