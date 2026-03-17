/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

/**
 * The class takes the validated date from DateToZodiac, and sets its corresponding zodiac sign which can be used further to generate various astrological data such as element and modality.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class ZodiacSign {
  #validatedDate

  /**
   * Initializes the ZodiacSign object with the validated date from the DateToZodiac class.
   *
   * @param {string} validatedDate The validated date
   */
  constructor (validatedDate) {
    this.#validatedDate = validatedDate
  }

  /**
   * Determines the zodiac sign for the validated date.
   *
   * @returns {string} The zodiac sign corresponding to the validated date
   * @throws {Error} If no matching zodiac sign is found
   */
  #decideZodiacSign () {
    const monthDay = this.#validatedDate.slice(5)
    return this.#findZodiacSign(monthDay)
  }

  /**
   * Finds the zodiac sign given a month-day string.
   *
   * @param {string} monthDay The month and day extracted from the validated date
   * @returns {string} The zodiac sign corresponding to the month-day
   */
  #findZodiacSign (monthDay) {
    const zodiacSigns = this.#getZodiacSigns()

    for (const sign in zodiacSigns) {
      const periods = zodiacSigns[sign]

      if (Array.isArray(periods)) {
        for (const period of periods) {
          if (this.#isDateInPeriod(monthDay, period)) {
            return sign
          }
        }
      } else if (this.#isDateInPeriod(monthDay, periods)) {
        return sign
      }
    }
    return this.#handleNoMatchingSign(monthDay)
  }

  /**
   * Handles the case when no matching zodiac sign is found.
   *
   * @param {string} monthDay The month and day for which no matching sign was found
   * @throws {Error} If no matching sign is found
   */
  #handleNoMatchingSign (monthDay) {
    throw new Error(`Found no matching sign for ${monthDay}`)
  }

  /**
   * Returns zodiac signs and their date ranges.
   *
   * @returns {object} Zodiac signs with their corresponding start and end dates
   */
  #getZodiacSigns () {
    return {
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
  }

  /**
   * Checks if a given month-day string falls within a specified date period.
   *
   * @param {string} monthDay The month and day to check
   * @param {object} period An object with 'start' and 'end' dates
   * @returns {boolean} True if the month-day is within the period
   */
  #isDateInPeriod (monthDay, period) {
    return monthDay >= period.start && monthDay <= period.end
  }

  /**
   * Retrieves the zodiac sign.
   *
   * @returns {string} The zodiac sign of the validatedDate
   */
  getZodiacSign () {
    return this.#decideZodiacSign()
  }
}
