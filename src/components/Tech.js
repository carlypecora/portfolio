import React from 'react'

class Tech extends React.Component {



  render(){
    return(
      <div id="tech">
        <div className="tech-div">
        <h2>Skills</h2>
        <p className="skills"><i className="devicon-javascript-plain"></i>Javascript</p>
        <p className="skills"><i className="devicon-react-original"></i>React/ReactNative/Redux</p>
        <p className="skills"><i className="devicon-nodejs-plain"></i>Node.js</p>
        <p className="skills"><i className="devicon-ruby-plain"></i>Ruby</p>
        <p className="skills"><i className="devicon-rails-plain"></i>Rails</p>
        <p className="skills"><i className="devicon-python-plain"></i>Python</p>
        <p className="skills"><i className="devicon-django-plain"></i>Django</p>
        <p className="skills"><i className="devicon-css3-plain"></i>CSS3</p>
        <p className="skills"><i className="devicon-html5-plain"></i>HTML5</p>
        <p className="skills"></p>
        </div>
      </div>
    )
  }
}
export default Tech