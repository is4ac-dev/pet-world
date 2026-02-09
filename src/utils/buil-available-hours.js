// Recebendo o elemento de seletor de hora para agendamento
const hourScheduleSelector = document.getElementById("schedule-hour")

// Função construtora para apresentar horários disponíveis
export function buildAvailableHours(hours){

  // Limpando opções de horários anteriores
  hourScheduleSelector.innerHTML = "<option disabled selected>Horários</option>"

  // Percorrendo os horários disponíveis
  hours.forEach(hour => {

    // Verificando se horário está disponível
    if(hour.available){

      // Criando elemento de option
      const option = document.createElement("option")

      // Definindo atributo de valor
      option.setAttribute("value", hour.value)

      // Adicionando contéudo de texto do elemento
      option.textContent = hour.value

      // Adicionando <option> criada ao elemento <select>
      hourScheduleSelector.appendChild(option)
    }
  });
}