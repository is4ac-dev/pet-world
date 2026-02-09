// Importando o módulo de DAYJS
import dayjs from "dayjs";

// Recebendo o elemento de seletor de data da agenda
const dateAgendaSelector = document.getElementById("agenda-date-selector")

// Recebendo o elemento de seletor de data para agendamento
const dateScheduleSelector = document.getElementById("schedule-date")

// Recebendo data atual
const currentDate = dayjs().format("YYYY-MM-DD")

// Carregando a data atual do atendimento e define a data mínima para atendimento e agendamento
dateAgendaSelector.value = dateAgendaSelector.min = currentDate
dateScheduleSelector.value = dateScheduleSelector.min = currentDate