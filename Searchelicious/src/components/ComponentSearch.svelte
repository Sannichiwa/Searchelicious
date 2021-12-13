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
		// searchDisplayAmount.set(userSearchAmount);
		userInputSearchText = '';
	};
</script>

<main>
	<!-- <select bind:value={userSearchAmount} on:change={() => changesearchDisplayAmount()}
		>Amount
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="5">5</option>
		<option value="10">10</option>
	</select> -->

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
	}
</style>
