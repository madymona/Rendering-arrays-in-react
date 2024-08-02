import React from 'react';

function Score({ date, score }) {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default Score;
