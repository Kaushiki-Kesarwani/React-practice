import React from 'react'

const Toggle = ({ show, title, children, setShow }) => {
  return (
    <article className={`topic-card ${show ? 'open' : ''}`}>
      <div className="topic-head">
        <h2>{title}</h2>
        {!show && (
          <button type="button" onClick={setShow}>
            Show
          </button>
        )}
      </div>
      {show && <p className="topic-content">{children}</p>}
    </article>
  )
}

export default Toggle
