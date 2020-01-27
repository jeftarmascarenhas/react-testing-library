import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

function ContactList(props) {
  if (!props.contacts || !props.contacts.length) return <div>'No contacts'</div>
  return (
    <ul>
      {[...props.contacts].reverse().map(({ name, id }) => (
        <li key={id} data-testid="contact-name">
          {name}
        </li>
      ))}
    </ul>
  )
}

test('rendering "No contacts" when there are a contacts', () => {
  const { getByText } = render(<ContactList />)
  expect(getByText(/no contacts/i)).toBeInTheDocument()
})

test('rendering contacts', () => {
  const fakeContacts = [{ id: 1, name: 'Jeftar' }, { id: 2, name: 'Samires' }]
  const { getAllByTestId } = render(<ContactList contacts={fakeContacts} />)
  const contactNames = getAllByTestId('contact-name').map(li => li.textContent)
  // const fakeContactNames = fakeContacts.map(contact => contact.name)
  expect(contactNames).toMatchSnapshot(`
    Array [
      "Samires",
      "Jeftar",
    ]
  `)
})
