import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFecthByDay({ date }) {
  
  // Requisitando dados da API
  const response = await fetch(`${apiConfig.baseURL}/schedules`)

  // Convertendo dados para JSON
  const data = await response.json()

  // Filtrando os agendamentos pelo dia selecionado
  const dailySchedules = data.filter(( schedule ) => dayjs(date).isSame(schedule.when, "day"))

  // Retornando agendamentos do dia
  return dailySchedules
}