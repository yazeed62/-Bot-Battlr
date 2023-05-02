import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


function App() {
  const [view, setView] = useState("botCollection");
  const [bots, setBots] = useState([]);
  const [error, setError] = useState(null);
  const [army, setArmy] = useState([]);G

  //fetch bots data from server
  useEffect(() => {
    fetch("http://localhost:3000/bots",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    })

      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => setError(error));
  }, []);

  const enlistBot = (bot) => {
    setArmy([...army, bot]);
  };

 

  return (
    <div className="App">
    {error ? (
      <div>Error: {error.message}</div>
    ) : (
      <>
        <button onClick={() => setView("botCollection")}>Bot Collection</button>
        <button onClick={() => setView("yourBotArmy")}>Your Bot Army</button>
        {view === "botCollection" && <BotCollection bots={bots} onEnlist={enlistBot} />}
        {view === "yourBotArmy" && <YourBotArmy bots={bots} />}
      </>
      )}
    </div>
  );
}

export default App;
