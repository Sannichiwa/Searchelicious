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

	<input bind:value={userInputSearchText} type="text" name="" id="input" />

	<button on:click={() => changeTheRecipeSearchText()}>Search</button>
</main>

<style>
	main {
		display: grid;
		grid-auto-flow: column;
	}
	input {
		background-color: rgb(255, 255, 255);
		width: 400px;
		height: 40px;
		border: 1px solid black;
		border-radius: 3px;
		box-shadow: rgb(100, 100, 100);
		
		/* grid-template-rows: 200px; */
		margin-left: 0;
	}

	button {
		grid-column: 3;
		grid-template-rows: 3;
		width: 120px;
		border: 1px solid black;
		border-radius: 3px;
		box-shadow: rgb(100, 100, 100);
	}
</style>
