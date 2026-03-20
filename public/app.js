import { Element } from '../src/lib/Element.js'
import { Modality } from '../src/lib/Modality.js'

document.addEventListener('DOMContentLoaded', () => {
  const dom = {
    dateInput: document.getElementById('birthDate'),
    showButton: document.getElementById('showButton'),
    sign: document.getElementById('sign'),
    element: document.getElementById('element'),
    modality: document.getElementById('modality')
  }

  /**
   * Renders a loading state while waiting for the API response.
   */
  function renderLoading () {
    dom.sign.textContent = 'Loading...'
    dom.element.textContent = ''
    dom.modality.textContent = ''
  }

  /**
   * Renders the results for the zodiac sign, element, and modality.
   *
   * @param {string} zodiacSign The zodiac sign to display
   * @param {string} element The element associated with the zodiac sign
   * @param {string} modality The modality associated with the zodiac sign
   */
  function renderResults (zodiacSign, element, modality) {
    dom.sign.textContent = `Your zodiac sign is: ${zodiacSign}`
    dom.element.textContent = `The element of ${zodiacSign} is: ${element}`
    dom.modality.textContent = `The modality of ${zodiacSign} is: ${modality}`
  }

  /**
   * Fetches the zodiac sign from the API based on the provided birth date.
   *
   * @param {string} birthDate The birth date to send as a query parameter
   * @returns {Promise<object>} A promise that resolves to the JSON response from the API
   */
  async function fetchZodiacSign (birthDate) {
    const response = await fetch(`/api/sign?date=${birthDate}`)
    return response.json()
  }

  dom.showButton.addEventListener('click', async () => {
    const birthDate = dom.dateInput.value

    if (!birthDate) {
      alert('Please select a date.')
      return
    }

    renderLoading()

    try {
      const data = await fetchZodiacSign(birthDate)

      if (!data || data.error) {
        alert(`Error: ${data.error}`)
        return
      }

      const zodiacSign = data.sign
      const element = new Element(zodiacSign).getElement()
      const modality = new Modality(zodiacSign).getModality()

      renderResults(zodiacSign, element, modality)
    } catch (error) {
      console.error('An error occurred while fetching the zodiac sign:', error)
      alert('An error occurred while fetching your zodiac sign.')
    }
  })
})
