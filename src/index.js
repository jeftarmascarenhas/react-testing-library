import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login'
import * as serviceWorker from './serviceWorker'

const App = () => {
  return <Login onSubmit={data => alert(JSON.stringify(data))} />
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
