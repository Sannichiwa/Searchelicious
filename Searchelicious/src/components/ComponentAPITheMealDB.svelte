<script>
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	$: url_theMealDB = `https://www.themealdb.com/api/json/v1/1/search.php?s=${$searchTerm}`;

	const getTheMealDBData = async () => {
		const res = await fetch(url_theMealDB);
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	};
</script>

{#key $searchTerm}
{#if $searchTerm !== ''}
		{#await getTheMealDBData() then data}
			{#each data.meals as meal}
				<div transition:fade>
					<ComponentCard provider="mealDB" description={meal.strInstructions} />
				</div>
			{/each}
		{:catch error}
			<p style="color: yellow">{error.message}</p>
		{/await}
		{/if}
	{/key}
