import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
const [bots,setBots] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000")
    .then((response) => response.json())
    .then((data) => setBots(data));
}, []);
g
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <BotCollection bots={bots} />
          </Route>
          <Route exact path="/your-bot-army">
            <YourBotArmy bots={bots} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
