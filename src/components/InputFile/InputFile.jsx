import React from 'react';
import './InputFile.module.css';

const InputFile = ({ handleFile }) => {
	return (
		<>
			<input type="file" accept=".csv" onChange={handleFile} />
		</>
	);
};

export default InputFile;
