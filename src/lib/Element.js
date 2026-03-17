/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

/**
 * The class determines the element associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class Element {
  #zodiacSign
  #elements

  /**
   * Initializes the Element object with a zodiac sign and prepares the list of elements.
   *
   * @param {string} zodiacSign The zodiac sign to determine element for
   */
  constructor (zodiacSign) {
    this.#zodiacSign = zodiacSign
    this.#elements = ['🔥 Fire', '🌍 Earth', '💨 Air', '💧 Water']
  }

  /**
   * Determines the element for the zodiac sign.
   *
   * @returns {string} The element corresponding to the sign
   */
  #decideElement () {
    const signsForElement = this.#getSignsForElement()
    return this.#findElement(this.#zodiacSign, signsForElement)
  }

  /**
   * Returns the mapping of zodiac signs grouped by their element.
   *
   * @returns {Array<Array<string>>} Zodiac signs grouped by element
   */
  #getSignsForElement () {
    return [
      ['♈Aries', '♌Leo', '♐Sagittarius'],
      ['♉Taurus', '♍Virgo', '♑Capricorn'],
      ['♊Gemini', '♎Libra', '♒Aquarius'],
      ['♋Cancer', '♏Scorpio', '♓Pisces']
    ]
  }

  /**
   * Finds the element for a given zodiac sign.
   *
   * @param {string} sign The zodiac sign to find the element for
   * @param {Array<Array<string>>} signsForElement Grouped zodiac signs
   * @returns {string} The matching element
   */
  #findElement (sign, signsForElement) {
    for (let i = 0; i < signsForElement.length; i++) {
      if (signsForElement[i].includes(sign)) {
        return this.#elements[i]
      }
    }

    return this.#handleNoMatchingElement()
  }

  /**
   * Handles the case when no matching element is found.
   *
   * @throws {Error} If no matching element is found
   */
  #handleNoMatchingElement () {
    throw new Error(`Found no matching element for ${this.#zodiacSign}`)
  }

  /**
   * Retrieves the element of the sign.
   *
   * @returns {string} The element corresponding to the sign
   */
  getElement () {
    return this.#decideElement()
  }
}
