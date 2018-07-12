// @flow

import xorshift128 from './src/lib/xorshift128'
import CHARACTER_SET from './src/character-set'

const NUMOF_CHARACTERS = CHARACTER_SET.length
const generate = (digit: number) => {
  const tmp = Array(digit)
  for (let i = 0; i < digit; ++i) {
    const index = Math.floor(xorshift128() * NUMOF_CHARACTERS)
    tmp[i] = CHARACTER_SET[index]
  }
  return tmp.join('')
}

console.log(generate(32))
