import React from 'react';

function GuessInput({ handleGuessSubmit, status }) {
  const [newGuess, setNewGuess] = React.useState('');
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuessSubmit(newGuess);
        setNewGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={newGuess}
        onChange={(event) => {
          setNewGuess(event.target.value.toUpperCase());
        }}
        title="5 letter word"
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        minLength={5}
        required
        disabled={status !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
