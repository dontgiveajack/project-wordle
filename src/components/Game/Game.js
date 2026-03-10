import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Banner from '../Banner';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleGuessSubmit(newGuess) {
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (newGuess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput status={status} handleGuessSubmit={handleGuessSubmit} />
      {status !== 'running' && (
        <Banner status={status} guessCount={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
