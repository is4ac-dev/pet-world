// Importando o módulo de DAYJS
import dayjs from "dayjs";

// Importando o módulo que armazena os horários dispostos para serviço
import { openingHours } from "./opening-hours.js"

// Criando função para verificar disponibilidade dos horários dispostos
export function availableHours({ date, dailySchedules }){

  // Recebendo lista com horários indisponíveis
  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  // Criando lista de horários disponíveis e indisponíveis
  const opening = openingHours.map((hour) => {

    // Recebendo somente a hora
    const [ scheduleHour, ] = hour.split(":")

    // Verificando se a hora já passou
    const isHourFuture = dayjs(date).startOf("day").add(scheduleHour, "hour").isAfter(dayjs())

    // Verificando se o horário está disponível baseado nos registro da API e se a hora já passou
    const available = !unavailableHours.includes(hour) && isHourFuture

    // Retornando horários e suas disponibilidades
    return {
      value: hour,
      available: available ,
    }
  })

  // Retornando lista
  return opening
}