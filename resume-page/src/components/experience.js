import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// TODO - fix job timeline calculation
const calculate_job_timeline = () => {
  const startDate = new Date('1/1/2020'); // new Date(this.props.startDate);
  const endDate = new Date(); // (this.props.ongoing == 'true') ? new Date() : new Date(this.props.endDate);
  const years = endDate.getFullYear() - startDate.getFullYear();
  const m = Math.abs(startDate.getMonth() - endDate.getMonth());
  
  return (years > 0) ? years + " Years " + (m > 0 ? m + " Months " : ""): "";
}

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{calculate_job_timeline()}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
