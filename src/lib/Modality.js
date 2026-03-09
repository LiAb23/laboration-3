/*
* Copyright (c) [2024] [Liv Åberg]
* Licensed under the MIT License. For full license information, see LICENSE file.
*/

/**
 * The class determines the modality associated with the zodiac sign from the ZodiacSign class.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class Modality {
  /**
   * Sets the zodiac sign.
   *
   * @param {string} zodiacSign The zodiac sign to determine modality for
   */
  constructor (zodiacSign) {
    this.zodiacSign = zodiacSign
  }

  /**
   * Decides the modality of the sign given.
   *
   * @returns {string} The modality corresponding to the sign
   */
  #decideModality () {
    const modalities = {
      Cardinal: ['♈Aries', '♋Cancer', '♎Libra', '♑Capricorn'],
      Fixed: ['♌Leo', '♏Scorpio', '♒Aquarius', '♉Taurus'],
      Mutable: ['♐Sagittarius', '♓Pisces', '♊Gemini', '♍Virgo']
    }

    const zodiacSign = this.zodiacSign

    for (const modality in modalities) {
      if (modalities[modality].includes(zodiacSign)) {
        return modality
      }
    }

    throw new Error(`No matching modality found for ${zodiacSign}`)
  }

  /**
   * The presentation of the modality to the sign.
   *
   * @returns {string} The modality corresponding to the sign
   */
  getModality () {
    const modality = this.#decideModality()

    return modality
  }
}
