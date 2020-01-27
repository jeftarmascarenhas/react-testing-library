import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Login } from '../login'

afterEach(cleanup)

test('call onSubmit with username and password ', () => {
  const handleSubmit = jest.fn()
  const { getByLabelText, getByText } = render(
    <Login onSubmit={handleSubmit} />,
  )
  fireEvent.change(getByLabelText(/username/i), { target: { value: 'chuck' } })
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'norris' } })
  fireEvent.click(getByText(/submit/i))
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'chuck',
    password: 'norris',
  })
})
