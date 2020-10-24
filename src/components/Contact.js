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
        <a href="mailto:carlyannpecora@gmail.com" className="cl"><MailOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">carlypecora@protonmail.com</p></a>
        <a href="https://github.com/carlypecora" target="blank" className="cl"><GithubOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">@carlypecora</p></a>
        <a href="https://www.linkedin.com/in/carly-pecora-72454a189/" target="blank" className="cl"><LinkedinOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">Carly Pecora</p></a>
        <a href="https://www.instagram.com/pecoracarly/" target="blank" className="cl"><InstagramOutlined className='.contact-links'/>&nbsp;&nbsp;&nbsp;&nbsp; <p className="contact-link-name">@pecoracarly</p></a>
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