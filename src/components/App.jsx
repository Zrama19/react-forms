import React from "react";

function handleChange(event) {
  console.log(event.target.value);
}

function App() {
  return (
    <div className="container">
      <h1>Hello </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
