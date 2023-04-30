import React, { useState } from "react";

function Enlistment({ bot, onEnlist }) {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
      onEnlist(bot);
    }
  };

  return (
    <div>
      <button onClick={() => handleEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default Enlistment;
