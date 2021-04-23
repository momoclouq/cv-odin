import React from "react";

import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;
