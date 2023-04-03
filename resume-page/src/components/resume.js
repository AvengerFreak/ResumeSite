import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{marginTop: '10px'}}>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQEg3Q797ld7EQ/profile-displayphoto-shrink_800_800/0/1590846307253?e=1685577600&v=beta&t=emeC1HwazgIVtQt-_5Z8E9GWO_FAKqKGZojE_8dRkPQ"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{marginTop: '40px', marginBottom: '40px'}}>Shaina Munoz</h2>
            <h4 style={{color: 'grey'}}>Objective:</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              I am actively looking for an oportunity continue to growing my skills and work on exciting new projects. I am excited to bring my experience and expertise to a new team and collaborate with other professionals to create innovative solutions.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <br></br>
            <h4 style={{color: 'grey'}}>General Information:</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Wells Branch, Austin Texas 78728</p>
            <h5>Phone</h5>
            <p>(737) 292-1221</p>
            <h5>Email</h5>
            <p>shaina.munoz.rivera@gmail.com</p>
            <h5>Web</h5>
            <p>https://www.linkedin.com/in/shaina-munoz/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <br></br>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            <h3>Education</h3>
            <Education
              startYear={2016}
              endYear={2021}
              schoolName="University of Puerto Rico at Bayamon"
              schoolDescription="Bachelor's Degree in Computer Science with a specialization in Computational Science"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />
            <h3>Experience</h3>
            <Experience
              startDate='5/1/2018'
              endDate= '10/1/2018'
              ongoing = 'false'
              jobName="Pixelogic Web Developer Intern"
              jobDescription="Was assigned to edit web pages, blog posts, did research and ocassionally queried information from a database."
              />

            <Experience
              startDate='1/1/2020'
              endDate='7/1/2020'
              ongoing = 'false'
              jobName="Rock Solid Software Developer Trainee"
              jobDescription="Rock Solid Technologies, Inc. Internship"
            />

            <Experience
              startDate={'10/1/2020'}
              endDate={"12/1/2021"}
              ongoing = 'false'
              jobName="Linkit Programing Analyst"
              jobDescription="Working with POS terminals, especially those with an android operating system.Working with POS terminals, especially those with an android operating system. 
              The Points-of-Sale (POS) Management System allows, through a WEB type interface, the automated, immediate and online processing of the POS installed in the business network of our customers."
            />

            <Experience
              startDate={'1/10/22'}
              endDate={"4/2/2023"}
              ongoing = 'true'
              jobName="General Motors Software Developer"
              jobDescription="Dev Ops and Java backend development"
            />
          </Cell>
        </Grid>

        <div class="skills-container" style={{margin: '50px'}}>
          
          <h3>Skills:</h3>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

          <h4>Programming Languages</h4>
          <Skills
              skill="Java"
              progress={100}
            />
            <Skills
              skill="C#"
              progress={80}
            />
            <Skills
              skill="C"
              progress={50}
            />
            <Skills
              skill="F#"
              progress={25}
            />

          <h4>Scripting</h4>
          
          <Skills
            skill="Python"
            progress={100}
          />
          <Skills
            skill="JavaScript"
            progress={80}
          />
          <Skills
            skill="VB Script"
            progress={50}
          />
          <Skills
            skill="Shell Script"
            progress={25}
          />

          <h4>Frameworks</h4>
          
          <Skills
            skill="NodeJS"
            progress={100}
          />
          <Skills
            skill=".NET"
            progress={80}
          />
          <Skills
            skill="Android"
            progress={50}
          />
          <Skills
            skill="Angular"
            progress={25}
          />

          <h4>Libraries</h4>
          
          <Skills
            skill="Numpy"
            progress={100}
          />
          <Skills
            skill="Bootstrap"
            progress={80}
          />
          <Skills
            skill="React"
            progress={50}
          />
          <Skills
            skill="Maven"
            progress={25}
          />

      <h4>Tools</h4>
          
          <Skills
            skill="InteliJ"
            progress={100}
          />
          <Skills
            skill="Git"
            progress={80}
          />
          <Skills
            skill="Azure"
            progress={50}
          />
          <Skills
            skill="SQL Developer"
            progress={25}
          />

        </div>
      </div>
    )
  }
}

export default Resume;
