import React from 'react'
import HomeContainer from './HomeContainer'
import ProjectContainer from './ProjectContainer'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {
	
	componentDidMount(){
		console.log('%c Welcome to my Portfolio! ', 'background: #222; color: #bada55; fontWeight: bold',);
	}

	render() {
		return (
				<Switch>
					<Route exact path="/" component={ HomeContainer }/>
					<Route exact path="/projects" component={ ProjectContainer }/>
				</Switch>
		)
	}
}

export default MainContainer