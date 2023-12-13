import React from 'react';

function Button(props) {
  function clickHandler() {
    props.fnct(props.symbol);
  }

  return <button onClick={clickHandler}>{props.symbol}</button>;
}

export default Button;
