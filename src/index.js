/**
 * The main entry point for the application. Starts the Express server and handles API requests.
 *
 * @author Liv Åberg <lh224hh@student.lnu.se>
 * @version 1.0.0
 */

import express from 'express'
import { ValidatedDate } from './lib/ValidatedDate.js'

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static('public'))

app.use('/src', express.static('src'))

app.get('/api/sign', (req, res) => {
  const date = req.query.date
  if (!date) {
    return res.status(400).json({ error: 'Failed to fetch zodiac sign: missing date query parameter' })
  }

  try {
    const dateManager = new ValidatedDate(date)
    const zodiacSignObject = dateManager.getZodiacSignObject()
    const zodiacSign = zodiacSignObject.getZodiacSign()
    res.json({ sign: zodiacSign })
  } catch (error) {
    console.error('Failed to determine zodiac sign:', error)
    res.status(400).json({ error: `Failed to fetch zodiac sign: ${error.message}` })
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('Press Ctrl-C to terminate...')
})
