import React from 'react'

function Btn({ text, width, isImg }) {
  return (
    <button className="primary-button">
      <span style={{ width }}>
        {text}
        {isImg && (
          <img src="/images/Vector 2.png" alt="" className="ml-2" />
        )}
      </span>
    </button>
  );
}

export default Btn