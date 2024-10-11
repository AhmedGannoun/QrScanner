import { useState } from 'react'

import './App.css'
import QrScanner from './QrScanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Qr Code Scanner</h1>
        <QrScanner />
    </>
  )
}

export default App

