import React from 'react';

function Release(props) {
  const handleDischarge = () => {
    
    fetch(`http://localhost:3000/bots/${props.bot.id}`,{
    
    method: 'DELETE'
  })
      .then((response) => {
        console.log(response);
        
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
