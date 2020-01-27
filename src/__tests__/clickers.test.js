import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react'

import Clickers from '../clickers'

afterEach(cleanup)

test('displays the count', () => {
  const { getByTestId } = render(<Clickers />)
  expect(getByTestId('count')).toHaveTextContent('0')
})

test('incriment count', () => {
  const { getByTestId, getByText } = render(<Clickers />)
  fireEvent.click(getByText(/Up/i))
  expect(getByTestId('count')).toHaveTextContent('1')
})

test('decrement count async', async () => {
  const { getByText } = render(<Clickers />)
  fireEvent.click(getByText(/Down/i))
  const countSpan = await waitForElement(() => getByText('-1'))
  expect(countSpan).toHaveTextContent('-1')
})
