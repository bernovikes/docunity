'use strict'

const mongoose = require('mongoose')
const config = require('config')
const path = require('path')
const ourConfigDir = path.join(__dirname, '../config')
// const baseConfig = config.util.loadFileConfigs(ourConfigDir)
// config.util.setModuleDefaults('default', baseConfig)
console.log(config)

