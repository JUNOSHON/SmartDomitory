import React, {useState} from "react";

function Example() {
  const [count, setCount] = useState(0);
  const onclick = () => {
    setCount(count+1);
  }
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onclick}>
        Click me
      </button>
    </div>
  );
}
