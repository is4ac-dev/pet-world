// Recebendo formulário de agendamento
const form = document.querySelector("form")

// Esperando por evento de submit
form.addEventListener("submit", (event) => {

  // Prevenindo carregamento automático da página ao enviar o formulário
  event.preventDefault()

  // Recebendo informações de agendamento do client
  const owner   = document.getElementById("client-owner").value
  const pet     = document.getElementById("client-pet").value
  const phone   = document.getElementById("client-phone").value
  const service = document.getElementById("client-service").value
  const date    = document.getElementById("schedule-date").value
  const hour    = document.getElementById("schedule-hour").value

  const clientSchedule = {
    id     : Date.now().toString(),
    owner  : owner,
    pet    : pet,
    phone  : phone,
    service: service,
    date   : date,
    hour   : hour,
  }

  console.log(clientSchedule)
  
  console.log("Agendamento realizado com sucesso!")
})