// Importando módulo seletor de dia
import { scheduleFecthByDay } from "../../services/schedule-fetch-by-day.js"

// Importando módulo para exibir agendamentos
import { schedulesShow } from "../agenda/show.js"

// Recebendo o elemento de seletor de data da agenda
const dateAgendaSelector = document.getElementById("agenda-date-selector")

// Esperando pela seleção de um dia
dateAgendaSelector.addEventListener("input", async () => {
  
  // Recebendo dia selecionado
  const date = dateAgendaSelector.value

  // Requisitando agendamentos da API
  const dailySchedules = await scheduleFecthByDay({ date })

  // Exibindo os agendamentos na agenda
  schedulesShow({ dailySchedules })
})


