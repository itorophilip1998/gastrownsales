import React from 'react'

function Btn({text,width}) {
  return (
    <button className="primary-button">
      <span style={{ width }}>{text}</span>
    </button>
  );
}

export default Btn