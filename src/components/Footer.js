import React from 'react'
import { 
	GithubOutlined, 
	LinkedinOutlined, 
	MediumOutlined, 
	InstagramOutlined 
} from '@ant-design/icons'

const Footer = () => {
	return (
		<div id="footer"> 
			<div className="footer-items">
				<a href="https://github.com/carlypecora" className="footer-links"><GithubOutlined /></a>
				<a href="https://www.linkedin.com/in/carly-pecora-72454a189/" className="footer-links"><LinkedinOutlined /></a>
				<a href="https://medium.com/@carlyannpecora" className="footer-links"><MediumOutlined /></a>
				<a href="https://www.instagram.com/pecoracarly/" className="footer-links"><InstagramOutlined /></a>
			</div>
		</div>
	)
}

export default Footer