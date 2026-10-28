import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  console.log(props)
  return (
    <div className='nav'>
      <div className='navname'>sufiyan khan</div>
      <Navbar2 theme={props.theme} />
    </div>
  )
}

export default Navbar
