import { apiConfig } from "./api-config.js"

export async function cancelSchedule({ id }){
  
  await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
    method: "DELETE",
  })

  alert("Agendamento removido com sucesso!")
}