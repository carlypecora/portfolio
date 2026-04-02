import React from 'react'
import { Modal } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined
} from '@ant-design/icons'

export default class Contact extends React.Component {

 info = () => {
  Modal.info({
    footer: null,
    title: "Let's get in touch!",
    okText: "Back",
    content: (
      <div>
        <a href="mailto:carlypecora@protonmail.com" className="cl"><MailOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">carlypecora@protonmail.com</p></a>
        <a href="https://github.com/dime-squanderer" target="blank" className="cl"><GithubOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">@dime-squanderer</p></a>
        <a href="https://www.linkedin.com/in/carly-pecora-72454a189/" target="blank" className="cl"><LinkedinOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">Carly Pecora</p></a>
      </div>
    ),
    onOk() {},
  });
}

  render(){
    return(
      <div onClick={this.info}>Contact</div>
    )
  }
}