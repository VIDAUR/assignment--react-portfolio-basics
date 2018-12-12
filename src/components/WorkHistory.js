import React, {Component} from 'react'
// import Job components
import Job from "./Job"

class WorkHistory extends Component {
  render() {
    console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { 

          this.props.jobsData.map(function(jobInfo) {
          return <Job  title = {jobInfo.title}
                     company = {jobInfo.company}
                 description = {jobInfo.description}
                       start = {jobInfo.years.start}
                         end = {jobInfo.years.end}
                 />
           })
          /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;