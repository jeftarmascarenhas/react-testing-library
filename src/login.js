import React from 'react'

const Login = ({ onSubmit }) => {
  return (
    <div
      onSubmit={event => {
        event.preventDefault()
        const { username, password } = event.target.elements
        onSubmit({
          username: username.value,
          password: password.value,
        })
      }}
    >
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export { Login }
