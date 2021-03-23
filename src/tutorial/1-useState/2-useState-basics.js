import React, { useState } from 'react';

/* GENERAL RULES OF HOOKS
  - starts with word 'use' 
  - component name must be uppercase
  - must be in the function/component body
  - cannot call conditionally
*/

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    text === 'random title' ? setText('hello world') : setText('random title');
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
