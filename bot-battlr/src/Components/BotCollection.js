import React from "react";
import Enlistment from "./Enlistment";


function BotCollection (props) {
    const {bots, onEnlist} = props;

    return(
        <div className="bot-collection">
        <h2>Bot Collection</h2>
        <ul>
          {bots.map((bot) => (
            <li key={bot.id}>
              <img src={bot.avatar_url} alt={bot.name} />
              <p>{bot.name}</p>
              <p>{bot.special_ability}</p>
              <Enlistment bot={bot} onEnlist={onEnlist} />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default BotCollection;

