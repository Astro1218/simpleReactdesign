import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entries from '../Entries/Entries.js';
import React from 'react';

/*
 * As the "fake" data program no longer works, neither does 
 * this code.  However, it provides a template for how to 
 * set up components to display data.
 */

function App() {
	const number = 5;
	return (
		<>
			<Entries number={number} />
		</>
	);
}

export default App;
