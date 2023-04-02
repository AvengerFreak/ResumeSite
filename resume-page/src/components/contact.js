import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shaina Munoz</h2>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQEg3Q797ld7EQ/profile-displayphoto-shrink_800_800/0/1590846307253?e=1685577600&v=beta&t=emeC1HwazgIVtQt-_5Z8E9GWO_FAKqKGZojE_8dRkPQ"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi there! My name is Shaina, and I'm a 24-year-old Puerto Rican woman who recently moved to Austin Texas, about a year ago. I am a software developer with a passion for technology. I actively participate in hackathons and solving programing challenges for fun.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (737) 292-1221
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    shaina.munoz.rivera@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    LinkedIn
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
