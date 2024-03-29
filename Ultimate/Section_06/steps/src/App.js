import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1); // it will return an array
  // const [test,setTest] = useState({ name: "Laxman" });

  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step >= 1) setStep((s)=>s-1);
  }

  function handleNext() {
    if (step < 3) {

      setStep((s)=>s+1); // it will work
      // setStep((s)=>s+1); // it will work




      // setStep(step + 1);

      //It will increment the step by 1 only
      // setStep(step + 1);
    }
    //Bad practice
    // test.name = "Laxman1";

    //Good practice
    // setTest({ name: " Laxman1" });
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is)=>!is)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>
            <div className={step >= 2 ? "active" : " "}>2</div>
            <div className={step >= 3 ? "active" : " "}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
