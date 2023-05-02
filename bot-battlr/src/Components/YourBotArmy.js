import React, { useState } from 'react';
import Enlistment from './Enlistment';
import Release from './Release';

function  YourBotArmy(props) {
    const [ army, setArmy ] = useState([]);

    const enlistBot = (bot) => {
        setArmy([...army, bot]);
    };

    const dischargeBot = (id) => {
        setArmy(army.filter((bot) => bot.id !== id));
      };

    return(
        <div>
        <h2>Your Bot Army</h2>
        <ul>
          {army.map(bot => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <p>{bot.name}</p>
              <Release bot={bot} onDischarge={dischargeBot} />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default YourBotArmy;