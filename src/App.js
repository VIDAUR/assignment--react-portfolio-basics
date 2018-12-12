import React, { Component } from 'react';


import PortfolioFixed from "./components/PortfolioFixed";
import PortfolioContent from "./components/PortfolioContent";

class App extends Component {
  render() {
    return (
        <React.Fragment>
	        <PortfolioFixed/>
	        <PortfolioContent skillData = {this.props.skillData}  
	        					eduData = {this.props.eduData}
	        				   jobsData = {this.props.jobsData}

	        />
        </React.Fragment>
    );
  }
}

export default App;



