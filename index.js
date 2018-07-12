// @flow

import cac from 'cac'
import generate from './src/generate'

const DEFAULT_DIGIT = 32

const cli = cac()
cli.command(
  'generate',
  {
    desc: 'generates random string that has specified length',
  },
  input => {
    const digit = input[0] || DEFAULT_DIGIT
    console.log(generate(digit))
  },
)

cli.parse()
