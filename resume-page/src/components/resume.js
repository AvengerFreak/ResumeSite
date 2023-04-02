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
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQEg3Q797ld7EQ/profile-displayphoto-shrink_800_800/0/1590846307253?e=1685577600&v=beta&t=emeC1HwazgIVtQt-_5Z8E9GWO_FAKqKGZojE_8dRkPQ"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Shaina Munoz</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Hi there! My name is Shaina, and I'm a 24-year-old Puerto Rican woman who recently moved to Austin Texas, about a year ago. I am a software developer with a passion for technology. I actively participate in hackathons and solving programing challenges for fun.<br></br>
              As a developer, I thrive on the challenge of solving complex problems and finding creative solutions. I am highly skilled in various programming languages and have experience in developing software applications for both desktop and mobile platforms. <br></br>
              My experience in hackathons has given me a unique perspective on problem-solving, as I have been able to work on a variety of projects with diverse teams. As a result, I have developed excellent leadership and teamwork skills that allow me to effectively communicate with others and drive successful project outcomes.<br></br>
              Currently, I am actively looking for a new software development position that will allow me to continue to grow my skills and work on exciting projects. I am excited to bring my experience and expertise to a new team and collaborate with other professionals to create innovative solutions.<br></br>
              Overall, I am a driven, passionate, and skilled software developer who is eager to take on new challenges and make a positive impact on the world. Thank you for taking the time to read about me!
            </p>
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
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2021}
              schoolName="University of Puerto Rico at Bayamon"
              schoolDescription="Bachelor's Degree in Computer Science with a specialization in Computational Science"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experience</h2>
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

            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={25}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
