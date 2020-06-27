import { render } from '@redwoodjs/testing'

import Main from './Main'

describe('Main', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Main />)
    }).not.toThrow()
  })
})
