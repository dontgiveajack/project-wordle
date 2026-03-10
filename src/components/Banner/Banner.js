import React from 'react';

function Banner({ status, answer, guessCount }) {
  const style = status === 'won' ? 'happy banner' : 'sad banner';
  return (
    <div className={style}>
      {status === 'lost' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      {status === 'won' && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessCount} guesses</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
