// Importando configurações da API
import { apiConfig } from "./api-config.js"

// Criando função para enviar dados de agendamento para API
export async function scheduleNew({ id, owner, pet, phone, service, when }){

  // Enviando dados para API
  await fetch(`${apiConfig.baseURL}/schedules`, {
    method: "POST", // Método HTTP
    headers: { // Tipo de dados a serem enviados
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, owner, pet, phone, service, when }), // Dados a serem enviados
  })
}