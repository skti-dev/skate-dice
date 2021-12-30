import React from "react"

const Button = ({ handleClick, children }) => {
  return (
    <div className="button-container">
      <button onClick={handleClick} className="button">
        {children}
      </button>
    </div>
  )
}

export default Button