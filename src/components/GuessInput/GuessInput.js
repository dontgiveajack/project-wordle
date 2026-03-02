import React from 'react';

function GuessInput({guess, setGuess}) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({guess});
    setGuess('');
  }
  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }
  return(
  <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={guess} onChange={handleChange} pattern="[A-Z]{5}" maxLength={5} minLength={5} required/>
  </form>
  )
}

export default GuessInput;
