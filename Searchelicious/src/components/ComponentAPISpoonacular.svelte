<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	const keyAPI = 'a07ba8af78364f52b0f3a4937efe5d55';
	// const displayAmount = 1;
	// const ingredient = 'pizza';
	// const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${keyAPI}&ingredients=${ingredient}&number=${displayAmount}`;
	const url_full = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyAPI}&query=${$searchTerm}&maxFat=25&number=${$searchDisplayAmount}`;

	onMount(async () => {
		getRecipe();
	});

	const getRecipe = async () => {
		const res = await fetch(url_full);
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	};
</script>

{#key $searchTerm}
	{#await getRecipe()}
		<p>Getting resipe...</p>
	{:then data}
		{#each data.results as resipe}
			<div transition:fade>
				<ComponentCard
					title={resipe.title}
					url={'https://www.reddit.com/'}
					thumbnail={resipe.image}
				/>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/key}
