import React from 'react';

function  YourBotArmy(props) {
    const {army,enlistBot} = props;

    return(
        <div>
        <h2>Your Bot Army</h2>
        <ul>
          {army.map(bot => (
            <li key={bot.id}>
              <img src={bot.image} alt={bot.name} />
              <p>{bot.name}</p>
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default YourBotArmy;