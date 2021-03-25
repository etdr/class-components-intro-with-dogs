import React, { useState } from 'react'
import './App.css'

import Counter from './components/Counter'
import DogFetcher from './components/DogFetcher'

function App() {
  
  const [showDF, setShowDF] = useState(true)

  return (
    <div className="App">
      <Counter />
      <hr/>
      <button onClick={() => setShowDF(!showDF)}>toggle showDF</button>
      { showDF ? <DogFetcher breed="labrador" /> : null}
    </div>
  )
}

export default App
