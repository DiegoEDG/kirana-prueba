import React from 'react';
import styles from './Table.module.css';

const Table = ({ headers, entries }) => {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return (
		<section>
			{entries && (
				<table>
					<thead>
						<tr>
							{headers.map((header, idx) => (
								<th key={idx}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{[...new Set(entries)].map((entry, idx) => (
							<tr key={idx} className={`${entry[2].length !== 10 || !regex.test(entry[1]) ? styles.wrongFormat : ''}`}>
								<td>{entry[0]}</td>
								<td>{entry[1]}</td>
								<td>{entry[2]}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</section>
	);
};

export default Table;
