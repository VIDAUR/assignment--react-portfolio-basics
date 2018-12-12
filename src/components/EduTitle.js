import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    
    return (
      <div className="degree">
       <h5 className="degree__institute">{ this.props.institute/*pass institute as props in EducationHistory component */} </h5>
       <p className="degree__field">{this.props.field/*pass field as props in EducationHistory */}</p>
       <p className="degree__dates">{this.props.dates/*pass dates as props in EducationHistory */}</p>
     </div>
    );
  }
}

export default EduTitle;