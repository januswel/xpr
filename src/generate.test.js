// @flow

import assert from 'assert'
import generate from './generate'

describe('generate', () => {
  it('returns random string that has specified length', () => {
    assert(0 === generate(0).length)
    assert(1 === generate(1).length)
    assert(32 === generate(32).length)
  })
})
