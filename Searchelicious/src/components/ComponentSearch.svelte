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
	#input {
		background-color: aquamarine;
		width: 400px;
	}
	.disabled {
		color: rgb(228, 216, 216);
		font-size: 14px;
	}
</style>
