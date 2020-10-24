import React from 'react'

const Project = (props) => (
	<div className={props.itemClass}>
	  <iframe title={props.title} src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
	  <div className="card-content">
	    <h2>{props.title}</h2>
	    	<hr style={{borderTop: 1, borderColor: 'gray', marginRight: '10%'}}/>
	    	<div className="card-paragraphs">
		      <p>{props.p1}</p>
		      <p>{props.p2}</p>
		      <p>{props.p3}</p>
	      	  <a href={props.github}>{props.github}</a>
	      	</div>
	    </div>
  </div>
)


export default Project