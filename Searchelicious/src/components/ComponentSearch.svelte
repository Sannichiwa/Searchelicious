<script>
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';

	let userSearchAmount = 0;
	let userInputSearchText = '';

	const changesearchDisplayAmount = () => {
		searchDisplayAmount.set(userSearchAmount);
	};

	const cancelIfStringIsEmpty = () => {
		if (userInputSearchText.length >= 3) return true;
		else return false;
	};

	const changeTheRecipeSearchText = (value) => {
		if (cancelIfStringIsEmpty() === false) return;

		searchTerm.set(userInputSearchText);
		userInputSearchText = '';
	};
</script>

<main>
	<div class="searchInputAndText">
		<h2>Search for a dish/food of your choice</h2>
		<p>For example: Lasagne, Ramen or Tacos</p>
		<input bind:value={userInputSearchText} type="text" name="" id="input" />
	</div>

	<button on:click={() => changeTheRecipeSearchText()}>Search</button>
</main>

<style>
	main {
		display: grid;
		grid-auto-flow: column;
		justify-items: center;
		align-self: end;
		align-items: end;
		column-gap: 10px;
	}

	.searchInputAndText {
		justify-self: end;
	}

	.searchInputAndText p {
		color: white;
		font-style: italic;
	}

	.searchInputAndText h2 {
		color: white;
	}

	.searchInputAndText input {
		background-color: rgb(255, 255, 255);
		width: 400px;
		height: 40px;
		border: 1px solid black;
		border: none;
		border-radius: 3px;
		box-shadow: rgb(100, 100, 100);
	}

	button {
		justify-self: start;
		height: 44px;
		width: 100px;
		border: 1px solid black;
		border: none;
		border-radius: 3px;
		box-shadow: rgb(100, 100, 100);
		transition-duration: 0.4s;
		font-family: 'Raleway', sans-serif;
	}

	button:hover {
		background-color: #9a9e9a; 
		color: white;
	}
</style>
