import React from "react";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🥳";
  if (percentage < 100 && percentage >= 80) emoji = "😎";
  if (percentage < 80 && percentage >= 60) emoji = "😀";
  if (percentage < 60 && percentage >= 40) emoji = "😐";
  if (percentage < 40 && percentage >= 20) emoji = "😕";
  if (percentage < 20 && percentage >= 0) emoji = "😢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highScore">High Score: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Play Again
      </button>
    </>
  );
}

export default FinishScreen;
