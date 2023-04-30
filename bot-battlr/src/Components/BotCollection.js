import React from "react";


function BotCollection (props) {
    const {bots} = props;

    return(
        <div className="bot-collection">
        <h2>Bot Collection</h2>
        <ul>
          {bots.map((bot) => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <p>{bot.name}</p>
              <p>{bot.special_ability}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default BotCollection;