import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from "./Component/FriendDetails/FriendDetail";
import Home from "./Component/Home/Home";
import Notfound from "./Component/Notfound/Notfound";

function App() {
  
  return (
    
      <Router>
        <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
            </Route> 
          <Route  path="*">
            <Notfound/>
          </Route>
        
        
        </Switch>
      
      
      </Router>
    
    
      
    
  );
}

export default App;
