import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const calculate_job_timeline = (start, end, isOngoing) => {
  const startDate = new Date(start);
  const endDate = (isOngoing == 'true') ? new Date() : new Date(end);
  const years = endDate.getFullYear() - startDate.getFullYear();
  const m = Math.abs(startDate.getMonth() - endDate.getMonth());
  
  return (years > 0) ? years + " Year" + (years > 1 ? "s " : " ") + (m > 0 ? m + " Month" + (m > 1 ? "s " : " ") : ""): (m > 0 ? m + " Month" + (m > 1 ? "s " : " ") : "");
}

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{calculate_job_timeline(this.props.startDate, this.props.endDate, this.props.ongoing)}</p>
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
