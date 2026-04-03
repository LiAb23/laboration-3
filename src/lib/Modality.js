/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

/**
 * The class determines the modality associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class Modality {
  #zodiacSign

  /**
   * Initializes the Modality object with a zodiac sign.
   *
   * @param {string} zodiacSign The zodiac sign to determine modality for
   */
  constructor (zodiacSign) {
    this.#zodiacSign = zodiacSign
  }

  /**
   * Determines the modality for the zodiac sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  #decideModality () {
    const modalities = this.#getModalities()
    return this.#findModality(this.#zodiacSign, modalities)
  }

  /**
   * Returns the mapping of modalities to their corresponding zodiac signs.
   *
   * @returns {object} Modalities with corresponding zodiac signs
   */
  #getModalities () {
    return {
      Cardinal: ['♈Aries', '♋Cancer', '♎Libra', '♑Capricorn'],
      Fixed: ['♌Leo', '♏Scorpio', '♒Aquarius', '♉Taurus'],
      Mutable: ['♐Sagittarius', '♓Pisces', '♊Gemini', '♍Virgo']
    }
  }

  /**
   * Finds the modality for a given zodiac sign.
   *
   * @param {string} sign The zodiac sign to find the modality for
   * @param {object} modalities The mapping of modalities to zodiac signs
   * @returns {string} The matching modality
   */
  #findModality (sign, modalities) {
    for (const modality in modalities) {
      if (modalities[modality].includes(sign)) {
        return modality
      }
    }

    return this.#handleNoMatchingModality()
  }

  /**
   * Handles the case when no matching modality is found.
   *
   * @throws {Error} If no matching modality is found
   */
  #handleNoMatchingModality () {
    throw new Error(`Failed to determine modality for zodiac sign ${this.#zodiacSign}`)
  }

  /**
   * Retrieves the modality of the sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  getModality () {
    return this.#decideModality()
  }
}
