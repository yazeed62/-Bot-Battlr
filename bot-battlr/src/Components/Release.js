import React from 'react';
import axios from 'axios';

function Release(props) {
  const handleDischarge = () => {
    // Make API call to delete the bot from the server
    axios.delete(`http://localhost:3000/bots/${props.bot.id}`)
      .then((response) => {
        console.log(response);
        // Remove the bot from the YourBotArmy component on the frontend
        props.onDischarge(props.bot.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>{props.bot.name}</h3>
      <button onClick={handleDischarge}>X</button>
    </div>
  );
}

export default Release;
git