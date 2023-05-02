import React, { useState } from "react";

function Enlistment({ bot, onEnlist }) {
  const [enlistedBots, setEnlistedBots] = useState(false);

  const handleEnlist = () => {
    if (!enlistedBots) {
      setEnlistedBots(true);
      onEnlist(bot);
    }
  };

  return (
    <div>
         {enlistedBots ? (
        <button disabled>Enlisted</button>
      ) : (
      <button onClick={handleEnlist}>Enlist</button>
      )}
    </div>
  );
}

export default Enlistment;
