import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import '@babel/polyfill'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
