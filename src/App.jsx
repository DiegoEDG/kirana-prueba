import { useState } from 'react';
import { InputFile, Table } from './components';
import Papa from 'papaparse';
import './App.css';

function App() {
	const [headers, setHeaders] = useState();
	const [entries, setEntries] = useState();

	const handleFile = (event) => {
		event.preventDefault();

		if (!event) return;

		Papa.parse(event.target.files[0], {
			headers: true,
			skipEmptyLines: true,
			complete: (results) => {
				setHeaders(results.data[0]);
				setEntries(results.data.slice(1));
			}
		});
	};

	return (
		<main className="mainContainer">
			<h1>Kirana Pureba</h1>
			<InputFile handleFile={handleFile} />
			<h3>Total: {entries.length}</h3>
			<Table headers={headers} entries={entries} />
		</main>
	);
}

export default App;
