import React from 'react'

function StartScreen({numQuestions}) {
  return (
      <div className='start'>
          <h2>Welcome to The React Quiz</h2>
          <h3> {numQuestions} question to test your React Mastery</h3>
          <button>Let's Start</button>
      </div>
    )
}

export default StartScreen