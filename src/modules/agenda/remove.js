import { cancelSchedule } from "../../services/cancel-schedule.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "./show.js"

const periods = [
  document.getElementById("morning-section"),
  document.getElementById("afternoon-section"),
  document.getElementById("night-section")
]

// Gerando evento de click para cada lista [manhã, tarde, noite]
periods.forEach((period) => {

  // Capturando o evento de click na lista
  period.onclick = async (event) => {

    // Verificando se o click foi no botão de remover
    if(event.target.classList.contains("remove-btn")){

      // Obtendo a li pai do elemento clicado
      const item = event.target.closest("li")

      // Obtendo o id do elemento clicado
      const { id } = item.dataset

      if(id){
        const isConfirm = confirm("Tem certeza que deseja remover esse agendamento?")

        if(isConfirm){

          await cancelSchedule({ id })

          // Recebendo o elemento de seletor de data da agenda
          const dateAgendaSelector = document.getElementById("agenda-date-selector")

          // Recebendo dia selecionado
          const date = dateAgendaSelector.value

          // Requisitando agendamentos da API
          const dailySchedules = await scheduleFetchByDay({ date })

          // Exibindo os agendamentos na agenda
          schedulesShow({ dailySchedules })
        }
      }
    }
  }
})