import React from "react";
import ReactDOM from 'react-dom';

function Greeting() {
  return <div><h2>Welcome back to Madhugiri</h2></div>
}

// function Greeting() {
//   return React.createElement("h2",{style: { color: 'green',backgroundColor:'silver' }},"welcome to Madhugiri  karnataka");
// }

ReactDOM.render(<Greeting />,document.getElementById("root"));
// const rootl = ReactDOM.createRoot(document.getElementById('root'));
// rootl.render(<Greeting />);