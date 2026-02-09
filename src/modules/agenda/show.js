import dayjs from "dayjs";

const morning = document.getElementById("morning-section")
const afternoon = document.getElementById("afternoon-section")
const night = document.getElementById("night-section")

export function schedulesShow({ dailySchedules }){
  
  // Limpando as sessões de agendamentos
  morning.innerHTML = ""
  afternoon.innerHTML = ""
  night.innerHTML = ""

  // Renderizando os agendamentos por período
  dailySchedules.forEach(( schedule ) => {
    
    // Criando elementos que compõem um agendamento
    const item = document.createElement("li")
    const time = document.createElement("time")
    const client = document.createElement("span")
    const pet = document.createElement("strong")
    const owner = document.createElement("small")
    const service = document.createElement("small")
    const removeBtn = document.createElement("button")

    // Adicionando id do agendamento
    item.setAttribute("data-id", schedule.id)

    // Adicionando horário do agendamento
    time.textContent = dayjs(schedule.when).format("HH:mm")

    // Adicionando o nome do pet
    pet.textContent = schedule.pet

    // Adicionando o nome do tutor
    owner.textContent = "/" + schedule.owner

    // Adicionando nome do pet e tutor em client
    client.append(pet, owner)

    // Adicionando descrição do serviço
    service.textContent = schedule.service

    // Adicionando tipo do button
    removeBtn.type = "button"
    removeBtn.textContent = "Remover agendamento"

    // Adicionando elementos no item
    item.append(time, client, service, removeBtn)

    // Recebendo somente a hora para comparação
    const hour = Number(dayjs(schedule.when).hour())

    // Renderizando o agendamento na sessão de forma condicional (manhã, tarde ou noite)
    if(hour <= 12){
      morning.appendChild(item)
    }else if(hour <= 18){
      afternoon.appendChild(item)
    }else{
      night.appendChild(item)
    }
  })
}