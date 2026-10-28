import React, { useState } from 'react'
import Navbar from './pages/Navbar'

const App = () => {

  const [theme,setTheme] = useState('dark')

  return (
    <div className='app'>
      <Navbar theme={theme} >
        <h2>this is a navbar</h2>
        <h2>this is a sidebar</h2>
        <h2>this is a footer</h2>
      </Navbar>
    </div>
  )
}

export default App
