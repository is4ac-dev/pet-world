// Importando módulo DAYJS
import dayjs from "dayjs"

// Importando módulo para enviar dados para API
import { scheduleNew } from "../../services/new-schedule.js"

// Recebendo formulário de agendamento
const form = document.querySelector("form")

// Esperando por evento de submit
form.onsubmit = async (event) => {

  // Prevenindo carregamento automático da página ao enviar o formulário
  event.preventDefault()

  // Recebendo informações de agendamento do client
  const owner   = document.getElementById("client-owner").value
  const pet     = document.getElementById("client-pet").value
  const phone   = document.getElementById("client-phone").value
  const service = document.getElementById("client-service").value
  const date    = document.getElementById("schedule-date").value
  const hour    = document.getElementById("schedule-hour").value

  // Criando objeto da data selecionada pelo client
  const when    = dayjs(`${date} ${hour}`)

  // Enviando objeto com informações do agendamento do cliente para API
  await scheduleNew({
    id     : Date.now().toString(),
    owner  : owner.trim(),
    pet    : pet,
    phone  : phone,
    service: service,
    when   : when,
  })

  alert("Agendamento realizado com sucesso!")
}