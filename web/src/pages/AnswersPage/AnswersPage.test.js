import { render } from '@redwoodjs/testing'

import AnswersPage from './AnswersPage'

describe('AnswersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnswersPage />)
    }).not.toThrow()
  })
})
