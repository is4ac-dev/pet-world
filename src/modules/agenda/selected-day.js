// Importando o módulo de DAYJS
import dayjs from "dayjs";

// Recebendo o elemento de seletor de data da agenda
const selectedAgendaDate = document.getElementById("agenda-date-selector")

// Recebendo o elemento de seletor de data para agendamento
const selectedScheduleDate = document.getElementById("schedule-date")

// Recebendo data atual
const currentDate = dayjs().format("YYYY-MM-DD")

// Carregando a data atual do atendimento e define a data mínima para atendimento e agendamento
selectedAgendaDate.value = selectedAgendaDate.min = currentDate
selectedScheduleDate.value = selectedScheduleDate.min = currentDate