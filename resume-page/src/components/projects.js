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
            project_title ='Email Sender'
            project_description= "This project uses the python built in SMFTP library to send automated email messages."
            project_img_path='https://www.incimages.com/uploaded_files/image/1024x576/getty_881455830_379810.jpg'
            project_url='https://github.com/AvengerFreak/EmailSender'
          />

          {/* Python Project 2 */}
          <ProjectCard
            project_title ='SMS Sender'
            project_description= "This project utilizes the twilio API and python programing language to send automated text messages."
            project_img_path='https://www.userlike.com/api/proxy/resize/how-to-set-up-chat-macros/chat-macros-how.png?height=720'
            project_url='https://github.com/AvengerFreak/TextMessageGenerator'
          />

          {/* Python Project 3 */}
          <ProjectCard
            project_title ='Discord Bot'
            project_description= "This project utilizes the python programing language and discord sdk to create a Discord Bot."
            project_img_path='data:image/png;base64,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'
            project_url='https://github.com/AvengerFreak/DiscordBot'
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
