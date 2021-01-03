import React from 'react';

function Bomb(count) {
    let count = 0
    if(count % 2)
    return (
    <div>
        <p>tick</p>
        <p>tock</p>
        <p>BOOM!!!!</p>
    </div>
)}

let interval = setInterval(callback, timeInMs)

clearInterval(interval)

export default Bomb;