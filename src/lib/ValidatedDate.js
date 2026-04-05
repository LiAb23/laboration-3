/*
 * Copyright (c) [2026] [Liv Åberg]
 * Licensed under the MIT License. For full license information, see LICENSE file.
 */

import { ZodiacSign } from './ZodiacSign.js'

/**
 * The class validates the incoming date and stores the validated result. It can then create a zodiac sign object based on the validated date, which can be used to perform more specific astrological operations.
 *
 * @author Liv <lh224hh@student.lnu.se>
 * @version 1.0.0
 */
export class ValidatedDate {
  #inputDate
  #validatedDate

  /**
   * Sets the input date, validates it, and creates the object if the date is successfully validated.
   *
   * @param {string} inputDate The date sent to the class
   */
  constructor (inputDate) {
    this.#inputDate = inputDate
    this.#validatedDate = this.validateDate()
  }

  /**
   * Validates the the input date format and validity.
   *
   * @returns {string} The validated date in ISO 8601 format
   */
  validateDate () {
    this.#checkDateFormat(this.#inputDate)
    return this.#checkDateValidity(this.#inputDate)
  }

  /**
   * Checks if the date matches the correct YYYY-MM-DD format using a regular expression.
   *
   * @param {string} date The date to check
   * @throws {Error} If the format is incorrect
   */
  #checkDateFormat (date) {
    const dateRegex = /^(19\d{2}|20[0-5]\d|2060)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

    if (!dateRegex.test(date)) {
      throw new Error(`Failed to validate date ${date}. Expected format: YYYY-MM-DD`)
    }
  }

  /**
   * Checks if the date is valid using JavaScript Date parsing.
   *
   * @param {string} date The date to check
   * @returns {string} The validated date in ISO 8601 format
   * @throws {Error} If the date is invalid
   */
  #checkDateValidity (date) {
    const parsedDate = new Date(date)
    const validatedDate = parsedDate.toISOString().split('T')[0]

    if (isNaN(parsedDate.getTime()) || validatedDate !== date) {
      throw new Error(`Failed to validate date ${date}: date is not valid`)
    }

    return validatedDate
  }

  /**
   * Retrieves the validated date.
   *
   * @returns {string} The validated date
   */
  getValidatedDate () {
    return this.#validatedDate
  }

  /**
   * Creates a ZodiacSign object used to perform astrological operations on the validated date.
   *
   * @returns {object} The ZodiacSign object
   */
  getZodiacSignObject () {
    return new ZodiacSign(this.#validatedDate)
  }
}
