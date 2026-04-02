import React from 'react'
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:carlypecora@protonmail.com"><MailOutlined /> carlypecora@protonmail.com</a>
          <a href="https://github.com/dime-squanderer" target="_blank" rel="noreferrer"><GithubOutlined /> GitHub</a>
          <a href="https://www.linkedin.com/in/carly-pecora-72454a189/" target="_blank" rel="noreferrer"><LinkedinOutlined /> LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
