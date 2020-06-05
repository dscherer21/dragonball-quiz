import React, { useState, useEffect } from 'react';

function Explanation(props) {

    return (
        <div>
            <h3>{props.rightWrong}</h3>
            <button>Next</button>
        </div>
    );
}

export default Explanation;