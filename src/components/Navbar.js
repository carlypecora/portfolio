import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const Navbar = () => {
  const [current, setCurrent] = useState('')
  // state = {
  //   current: '',
  // };

  const handleClick = e => {
    setCurrent(e.key)
  };

  
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item style={{fontSize: 20, fontWeight: 'thin'}} id="brand-name">
        <Link to="/">Carly Pecora</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <div><Contact /></div>
      </Menu.Item>
      <Menu.Item key="resume">
        <a href="https://docs.google.com/document/d/1aYv2j_sBMMA6hSmMXDnmoU5DpWyCFxjicxf290rkSYw/edit?usp=sharing" target="blank">Resume</a>
      </Menu.Item>
      <Menu.Item key="projects">
        <Link to="/projects">Projects</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navbar