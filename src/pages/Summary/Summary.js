import React, { useState } from 'react';

function Summary() {
    const [ disableBtn, setDisableBtn ] = useState(true);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button name="sundae" disabled={disableBtn} aria-disabled={disableBtn}>Amazing Button</button>
            <input type="checkbox" onClick={(e) => setDisableBtn(!e.target.checked) } />
            <label htmlFor="checkbox">Disable Button???</label>
        </div>
    )
}

export default Summary