import React from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
const App = () => {
  const step=1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">Step {step}: {messages[step-1]}</p>

      <div className="buttons">
        <button style={{backgroundColor:'#7950f2',color:'#fff'}}>Previous</button>
        <button style={{backgroundColor:'#7950f2',color:'#fff'}}>Next</button>
      </div>
    </div>
  );
};


export default App;
