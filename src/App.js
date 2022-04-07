import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="flex justify-between">
        <h1>Hello</h1>
        <h1>World</h1>
      </div>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App

// https://mui.com/getting-started/installation/
// Roboto? npm install @fontsource/roboto
// icon npm install @mui/icons-material
