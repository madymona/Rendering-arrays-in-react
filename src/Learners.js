import React from 'react';
import Score from './Score';

function Learner({ name, bio, scores }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>{bio}</p>
      <div>
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;
