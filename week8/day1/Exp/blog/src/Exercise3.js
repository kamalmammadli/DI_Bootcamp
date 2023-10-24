import React from "react";

function Exercise (){
  return (
      <div>
        <h1 style={{
          color: "white",
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial"
        }}>
          This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a>This is a link</a>
        <form>This is a form
          <label>Enter your email</label>
          <input type="email"></input>
          <button>Button</button>
        </form>
        
        <ul>
          <li>This is a list</li>
          <li>This is a list</li>
          <li>This is a list</li>
        </ul>
      </div>
    );
  };

export default Exercise;

// !! import et app componentine