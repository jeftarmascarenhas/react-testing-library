import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Clickers from '../clickers'

afterEach(cleanup)

test('displays the count', () => {
  const { getByTestId } = render(<Clickers />)

  expect(getByTestId('count')).toHaveTextContent('0')
})
