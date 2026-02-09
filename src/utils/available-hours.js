// Importando o módulo de DAYJS
import dayjs from "dayjs";

// Importando o módulo que armazena os horários dispostos para serviço
import { openingHours } from "./opening-hours"

// Criando função para verificar disponibilidade dos horários dispostos
export function availableHours({ date }){

  // Criando lista de horários disponíveis e indisponíveis
  const opening = openingHours.map((hour) => {

    // Recebendo somente a hora
    const [ scheduleHour, ] = hour.split(":")

    // Verificando se a hora já passou
    const isHourFuture = dayjs(date).startOf("day").add(scheduleHour, "hour").isAfter(dayjs())

    // Retornando horários e suas disponibilidades
    return {
      value: hour,
      available: isHourFuture,
    }
  })

  // Retornando lista
  return opening
}