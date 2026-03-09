/*
* Copyright (c) [2024] [Liv Åberg]
* Licensed under the MIT License. For full license information, see LICENSE file.
*/

/**
 * The class takes the validated date from DateManager, and sets its corresponding zodiac sign which can be used further to generate various astrological data such as element and modality.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class ZodiacSign {
  /**
   * Sets the validated date from the DateManager class.
   *
   * @param {string} validatedDate The validated date
   */
  constructor (validatedDate) {
    this.validatedDate = validatedDate
  }

  /**
   * Sets the dates for each sign and decides the zodiac sign of the given date.
   *
   * @returns {string} The zodiac sign of the validatedDate
   */
  #decideZodiacSign () {
    const zodiacSigns = {
      '♈Aries': { start: '03-21', end: '04-19' },
      '♉Taurus': { start: '04-20', end: '05-20' },
      '♊Gemini': { start: '05-21', end: '06-20' },
      '♋Cancer': { start: '06-21', end: '07-22' },
      '♌Leo': { start: '07-23', end: '08-22' },
      '♍Virgo': { start: '08-23', end: '09-22' },
      '♎Libra': { start: '09-23', end: '10-22' },
      '♏Scorpio': { start: '10-23', end: '11-21' },
      '♐Sagittarius': { start: '11-22', end: '12-21' },
      '♑Capricorn': [
        { start: '12-22', end: '12-31' },
        { start: '01-01', end: '01-19' }
      ],
      '♒Aquarius': { start: '01-20', end: '02-18' },
      '♓Pisces': { start: '02-19', end: '03-20' }
    }

    const monthDay = this.validatedDate.slice(5)

    for (const zodiacSign in zodiacSigns) {
      const periods = zodiacSigns[zodiacSign]

      if (Array.isArray(periods)) {
        for (const period of periods) {
          if (monthDay >= period.start && monthDay <= period.end) {
            return zodiacSign
          }
        }
      } else {
        const { start, end } = periods
        if (monthDay >= start && monthDay <= end) {
          return zodiacSign
        }
      }
    }
    throw new Error('Found no matching sign.')
  }

  /**
   * The presentation of the sign.
   *
   * @returns {string} The zodiac sign of the validatedDate
   */
  getZodiacSign () {
    const zodiacSign = this.#decideZodiacSign()

    return zodiacSign
  }
}
