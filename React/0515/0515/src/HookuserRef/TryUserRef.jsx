import React, { useState, useEffect, useRef } from 'react';

function Counter() {
    let num = 0;
    num += 1;
    return <div>{ num }</div>
}

export default Counter;