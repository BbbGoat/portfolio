import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Link to={'/about'}>이동</Link>
        <div>Header</div>
    </>
  )
}

export default Header