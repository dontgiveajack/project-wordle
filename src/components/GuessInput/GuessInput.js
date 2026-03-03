import React from 'react';

function GuessInput({ handleClick }) {
  const [guess, setGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleClick(guess);
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
        pattern="[A-Z]{5}"
        maxLength={5}
        minLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
