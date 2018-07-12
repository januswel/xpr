// @flow

import xorshift128 from './lib/xorshift128'
import CHARACTER_SET from './character-set'

const NUMOF_CHARACTERS = CHARACTER_SET.length
const generate = (digit: number) => {
  const tmp = Array(digit)
  for (let i = 0; i < digit; ++i) {
    const index = Math.floor(xorshift128() * NUMOF_CHARACTERS)
    tmp[i] = CHARACTER_SET[index]
  }
  return tmp.join('')
}

export default generate
