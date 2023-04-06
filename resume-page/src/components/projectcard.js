import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProjectCard extends Component {
  render() {
    return(
        
        <div style={{minWidth: '450', margin: 'auto'}}>
            <Card shadow={5}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(' + this.props.project_img_path + ') center / cover'}} >{this.props.project_title}</CardTitle>
            <CardText>{this.props.project_description}</CardText>
            <CardActions border>
            <Button colored  onClick={() => { window.open(this.props.project_url, "_blank") }} >GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" onClick={ 
                async () => { 
                    await navigator.share(
                        {
                            title: this.props.project_title,
                            text: this.props.project_description,
                            url: this.props.project_url
                        }
                    );
                }
            }
        />
        </CardMenu>
        </Card>
        </div>
        
    )
  }
}

export default ProjectCard;