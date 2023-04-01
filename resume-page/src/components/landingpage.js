import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQEg3Q797ld7EQ/profile-displayphoto-shrink_800_800/0/1590846307253?e=1685577600&v=beta&t=emeC1HwazgIVtQt-_5Z8E9GWO_FAKqKGZojE_8dRkPQ"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Software Developer</h1>

            <hr/>

          <p>HTML/CSS | .Net | Object Oriented | React | Android | Functional Programing | API | SQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shaina-munoz/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="false" />
          </a>

          {/* Github */}
          <a href="https://github.com/AvengerFreak" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="false" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="false" />
          </a>

          {/* Youtube */}
          <a href="https://www.youtube.com/@AudibleACX" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="false" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
