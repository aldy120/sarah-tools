const hoursHelp = document.querySelector('#hoursHelp')
const hoursInput = document.querySelector('#hoursInput')

function onHoursInputChange() {
    const hours = parseInt(hoursInput.value)
    const workingDays = Math.floor(hours / 8)
    const remainderHours = hours % 8
    const result = `${workingDays} working days and ${remainderHours} working hours.`
    hoursHelp.textContent = result
}

hoursInput.addEventListener('change', onHoursInputChange)