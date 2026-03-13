document.addEventListener('DOMContentLoaded', () => {
  const showButton = document.getElementById('showButton')
  const birthDateInput = document.getElementById('birthDate')

  showButton.addEventListener('click', () => {
    const birthDate = birthDateInput.value
    const resultContainer = document.getElementById('resultContainer')

    resultContainer.textContent = 'Loading...'

    if (!birthDate) {
      alert('Please select a date.')
      resultContainer.textContent = ''
      return
    }

    fetch(`/api/sign?date=${birthDate}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(`Error: ${data.error}`)
        } else {
          resultContainer.textContent = `Your zodiac sign is: ${data.sign}`
        }
      })
      .catch(error => {
        console.error('Error fetching zodiac sign:', error)
        alert('An error occurred while fetching your zodiac sign.')
      })
  })
})
