import React from 'react'
import PropTypes from 'prop-types'
import { SiApplemusic } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ title, icon }) => {
  const navigate = useNavigate()
  return (
    <div className="navbar bg-primary">
      <h1 className="navbar--header-title">
        <div>{icon}</div> {title}
      </h1>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
      </ul>
    </div>
  )
}

NavBar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
}

NavBar.defaultProps = {
  title: 'Kpop Keeper',
  icon: <SiApplemusic />,
}
export default NavBar
