'use strict'
const path = require('path')
const fs = require('fs')
const stripBom = require('strip-bom')
const JSON5 = require('json5')

const parse = (data, fp) => JSON5.parse(stripBom(data), path.relative('.', fp))

module.exports = async fp => {
  const data = await fs.promises.readFile(fp, 'utf8')
  return parse(data, fp)
}

module.exports.sync = fp => parse(fs.readFileSync(fp, 'utf8'), fp)
