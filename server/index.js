'use strict'
const express = require('express')
const app = express()

// Get config
let config
try {
  config = require('../config.json')
} catch (e1) {
  try {
    config = require('../config.default.json')
  } catch (e2) {
    throw new Error('No config found')
  }
}

// Serve static
if (config.service.serve_static) {
  app.use(express.static(__dirname + '/app'))
}

// Listen
app.listen(config.service.port, () => {
  /* eslint no-console: 0 */
  console.log(`Service running over ${config.service.port}`)
})
