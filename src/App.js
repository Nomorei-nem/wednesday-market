import { useState } from 'react';
import { list } from './components/list';

export default function App() {
	return (
		<div>
			<Form />
		</div>
	);
}

function Form() {
	const image = list[35].image;

	return <img src={image} alt="fruit" />;
}
