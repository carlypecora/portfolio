import React from 'react'
import Project from '../components/Project'

class ProjectContainer extends React.Component {
	render(){
		return(
			<div>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube.com/embed/N-RPrJ5XBDI"} 
				title={"Slackers"} 
				p1={"Fullstack React/JS and Ruby/Rails Application with JWT/BCrypt Auth"}
				p2={"Live chatting through Action Cable to access WebSockets"}
				p3={"Recreation of Slack"}
				github={"https://github.com/carlypecora/mod-5-project-frontend"}
			/>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube.com/embed/yaGIcWIKyWM"} 
				title={"Not Mastermind"} 
				p1={"React Native mobile app guessing game"}
				p2={"Player must guess the color scheme of a hidden array of colored beads"}
				p3={"Player receives hints each round; eight rounds total"}
				github={"https://github.com/carlypecora/not-mastermind"}
			/>
			<Project 
				itemClass={"individual-project blue-project"}
				src={"https://www.youtube.com/embed/8LaQP2Ko4C8"} 
				title={"Postcard"} 
				p1={"Fullstack Javascript and Ruby/Rails Application"}
				p2={"Upload photos to a specific location on a map"}
				p3={"View friends' maps"}
				github={"https://github.com/carlypecora/Frontend-mod3"}
			/>
			<Project 
				itemClass={"individual-project grey-project"}
				src={"https://www.youtube.com/embed/DAs7lAifncY"} 
				title={"mRDB"} 
				p1={"Fullstack Ruby/Rails Application with Auth through BCrypt"}
				p2={"Login and search from the Spotify API"}
				p3={"View an artist's albums and rate an artist's songs"}
			/>
			</div>
		)
	}
}

export default ProjectContainer