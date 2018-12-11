import React, { Component } from 'react';


import PortfolioFixed from "./components/PortfolioFixed";
import PortfolioContent from "./components/PortfolioContent";

class App extends Component {
  render() {
    return (
        <React.Fragment>
	        <PortfolioFixed/>
	        <PortfolioContent/>
        </React.Fragment>
    );
  }
}

export default App;



