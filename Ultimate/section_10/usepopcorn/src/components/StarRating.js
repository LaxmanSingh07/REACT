import React from "react";
// now it will not regenerate or call the object again and again
const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap:"16px"
}

const starContainerStyle = {
    display: "flex",
    gap: "4px"
}

const textStyle = {
    lineHeight: "0",
    margin: '0',
    
}


function StarRating({ maxRating = 5}) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
          </div>
          <p style={textStyle}></p>
    </div>
  );
}

export default StarRating;
