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
	const [searchTerm, setSearchTerm] = useState('');
	const [curItem, setCurItem] = useState('');

	function handleSearch(e) {
		setSearchTerm(e.target.value.toLowerCase());
	}

	function handleSubmit(e) {
		e.preventDefault();
		setCurItem(
			...list.filter(
				(item) =>
					item?.name.toLowerCase() === searchTerm ||
					item?.alsoKnownAs.includes(searchTerm)
			)
		);

		e.target.reset();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="search-bar">Product:</label>
				<input
					type="search"
					id="search-bar"
					onChange={(e) => handleSearch(e)}
				/>
				<button type="submit">Submit</button>
			</form>
			{curItem && (
				<div className="aspect-square h-80">
					<img src={curItem.image} alt={curItem.name} />
					<span>
						Kannada: {curItem.kannadaName} (
						{curItem.kannadaTransliteration.toLowerCase()})
					</span>
					<br />
					<span>
						Hindi: {curItem.hindiName} (
						{curItem.hindiTransliteration.toLowerCase()})
					</span>
				</div>
			)}
		</>
	);
}
