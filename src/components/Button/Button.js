import React from 'react';

const Button = ({ onClick, isVisible }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      style={{
        display: isVisible ? 'block' : 'none',
        margin: '20px auto', 
      }}
    >
      Load more
    </button>
  );
};

export default Button;
