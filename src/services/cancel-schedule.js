// Importando configurações da API
import { apiConfig } from "./api-config.js"

// Função para deletar agendamento da API
export async function cancelSchedule({ id }){
  
  // Fazendo requisição de delete nos dados da API baseado pelo ID
  await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
    method: "DELETE",
  })

  // Exibindo mensagem de sucesso
  alert("Agendamento removido com sucesso!")
}