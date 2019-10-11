import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="project-card border-radius-primary shadow">
        <img src="https://www.geshnaprakritiyatra.com/uploads/2018/07/Indrahar-Pass-2.jpg" />
        <div className="project-details padding-1">
          <h5>Project</h5>
          <p>"I like the way you work it No diggity I wanna bag it up"</p>
          <div className="project-tags">
            <span className="project-tag">React</span>
            <span className="project-tag">Node</span>
            <span className="project-tag">Scss</span>
          </div>
          <div className="project-links flex-start">
            <a>
              <i className="fa fa-github"></i>
            </a>
            <a>
              <i className="fa fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;