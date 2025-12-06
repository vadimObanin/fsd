import {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <button onClick={increment}>Increment</button>
            <h1>{counter}</h1>
        </>

    )
}