import React, { useState } from 'react';
const App = () => {
const [count, setCount] = useState(0);
const increment = () => {
setCount(count + 1);
};
const decrement = () => {
setCount(count - 1);
};
return (
<div>
<h1>Props and State Management</h1>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<ChildComponent message="Hello, child component!" />
</div>
);
};
const ChildComponent = (props) => {
return (
<div>
<p>{props.message}</p>
</div>
);
};
export default App;
