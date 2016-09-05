'use strict'
const chai = require('chai')
const schai = require('sinon-chai')
const mod = require('module')
const path = require('path')
global.sinon = require('sinon')
global.expect = chai.expect
chai.use(schai)

// Require files based on root
process.env.NODE_PATH = path.join(__dirname, '..') + path.delimiter + (process.env.NODE_PATH || '')
mod._initPaths()
