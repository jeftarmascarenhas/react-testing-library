import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import axiosMock from 'axios'

import Fetch from '../fetch'

afterEach(cleanup)

test('fetches and displays data', async () => {
  axiosMock.get.mockResolvedValueOnce({ data: { greeting: 'Hello there' } })

  const url = '/greeting'
  const { getByTestId } = render(<Fetch url={url} />)

  expect(getByTestId('loading')).toHaveTextContent('Loading data...')
  const resolveSpan = await waitForElement(() => getByTestId('resolved'))
  expect(resolveSpan).toHaveTextContent('Hello there')
  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
})
