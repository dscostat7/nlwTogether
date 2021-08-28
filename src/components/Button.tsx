import { useState } from "react";

export function Button() {
    // let contador = 0;
    const [contador, setCounter] = useState(0);

    function increment() {
        setCounter(contador + 1);
    }
    return (
        <button onClick={increment}>{contador}</button>
    );
}