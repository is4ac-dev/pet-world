// Recebendo formulário de agendamento
const form = document.querySelector("form")

// Esperando por evento de submit
form.addEventListener("submit", (event) => {

  // Prevenindo carregamento automático da página ao enviar o formulário
  event.preventDefault()
  
  console.log("Agendamento realizado com sucesso!")
})