import React from "react";
import {Route} from "react-router-dom" 
import Start from "./start";
import Middle from "./middle";

function App() {

  return (
    <div>
      <Route path ="/" exact={true} component={Start}/>
      <Route path="/q" component={Middle}/>
    </div>
  );
}

export default App;
