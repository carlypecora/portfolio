import React from 'react'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="/" className="nav-brand">Carly Pecora</a>
        <div className="nav-links">
          <a href="mailto:carlypecora@protonmail.com" title="Email"><MailOutlined /></a>
          <a href="https://github.com/dime-squanderer" target="_blank" rel="noreferrer" title="GitHub"><GithubOutlined /></a>
          <a href="https://www.linkedin.com/in/carly-pecora-72454a189/" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedinOutlined /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
