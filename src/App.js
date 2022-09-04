import { useState } from 'react';

export function replaceCapWithSpaces(color){
	return color.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	const [btnCol, setBtnCol] = useState('red');
	const [disabled, setDisabled] = useState(false);
	const newBtnCol = btnCol === 'red' ? 'blue' : 'red';

	return (
		<div>
			<button style={{ backgroundColor: disabled ? 'gray' : btnCol }} onClick={() => setBtnCol(newBtnCol)} disabled={disabled}>
				Change to {newBtnCol}
			</button>
			<input type="checkbox" onClick={(e) => setDisabled(e.target.checked)}/>
			<label htmlFor="checkbox">Change Color??</label>
		</div>
	);
}

export default App;
