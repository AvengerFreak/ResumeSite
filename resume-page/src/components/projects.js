import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCard from './projectcard';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Java Project 1 */}
          <ProjectCard
            project_title ='Math Chat'
            project_description= "A server/client chat that can recieve and send math formulas using LaTex formulas to generate a LaTex TextIcon"
            project_img_path='https://www.userlike.com/api/proxy/resize/how-to-set-up-chat-macros/chat-macros-how.png?height=720'
            project_url='https://github.com/AvengerFreak/LatexProject'
          />

          {/* Java Project 2 */}
          <ProjectCard
            project_title ='Java Project #2'
            project_description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            project_img_path=''
            project_url='https://github.com/AvengerFreak'
          />

          {/* Java Project 3 */}
          <ProjectCard
            project_title ='Java Project #3'
            project_description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            project_img_path=''
            project_url='https://github.com/AvengerFreak'
          />
        </div>
      )

    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Python Project 1 */}
          <ProjectCard
            project_title ='Python Project #1'
            project_description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            project_img_path=''
            project_url='https://github.com/AvengerFreak'
          />

          {/* Python Project 2 */}
          <ProjectCard
            project_title ='Python Project #2'
            project_description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            project_img_path=''
            project_url='https://github.com/AvengerFreak'
          />

          {/* Python Project 3 */}
          <ProjectCard
            project_title ='Python Project #3'
            project_description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
            project_img_path=''
            project_url='https://github.com/AvengerFreak'
          />
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* C# Project 1 */}
          <ProjectCard
            project_title ='VoteNow'
            project_description= "ASP.NET online voting system."
            project_img_path='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYf6Rvg6eo3hNCwAqSv-oGlkQNWOmfkDzcw&usqp=CAU'
            project_url='https://github.com/AvengerFreak/VoteNow'
          />

          {/* C# Project 2 */}
          <ProjectCard
            project_title ='UnitConverter'
            project_description= "Windows form application that performs temperature, mass and preasure unit conversions."
            project_img_path='https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/84/88/05/8488052e-6765-92af-41ac-54a7a626bb52/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/1200x600bf.png'
            project_url='https://github.com/AvengerFreak/UnitConverter'
          />

          {/* C# Project 3 */}
          <ProjectCard
            project_title ='UrlPinger'
            project_description= "This program executes a network health check on a hardcoded url by executing a ping function."
            project_img_path='https://i0.wp.com/www.samnews24.com/wp-content/uploads/2023/01/Samsung-Health-Monitor-Update.png?resize=896%2C525&ssl=1'
            project_url='https://github.com/AvengerFreak/UrlPinger'
          />
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* JavaScript Project 1 */}
          <ProjectCard
            project_title ='ChatBox'
            project_description= "Simple react chat component that implements the OpenAI API in its backend service."
            project_img_path='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQas_8WcYOxiLSASYgLlgS_4q9E__zpNfdm2-WLMBkxGIpXp1E0rhlaW8N3H1EckBnYO4I&usqp=CAU'
            project_url='https://github.com/AvengerFreak/ChatGPTDemo/tree/master/chat-box'
          />

          {/* JavaScript Project 2 */}
          <ProjectCard
            project_title ='Stop Watch'
            project_description= "A simple vanilla javascript and sass stopwatch."
            project_img_path='https://c.tadst.com/gfx/1200x630/fb-stopwatch2.png?1'
            project_url='https://github.com/AvengerFreak/StopWatch'
          />

          {/* JavaScript Project 3 */}
          <ProjectCard
            project_title ='JS Calculator'
            project_description= "A simple vanilla javascript calculator."
            project_img_path='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2o9jXOMPaBixWWWXKLo-YYEfjhSlt4ZTgyA&usqp=CAU'
            project_url='https://github.com/AvengerFreak/Calculator'
          />
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
          <Tab>C#</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
