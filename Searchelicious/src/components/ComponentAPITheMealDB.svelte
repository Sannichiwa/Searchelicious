<script>
	// imports fade-transition-effect from the Svelte library for the HTML-element(s) to use
	import { fade } from 'svelte/transition';

	// imports shared (between all components) variables/data
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';

	// imports the CARD-component
	import ComponentCard from './ComponentCard.svelte';

	// $: > reactive/auto-updating variables/data. These string(s) contains HTTP-links for the API-HTTP-fetch/request
	$: url_theMealDB = `https://www.themealdb.com/api/json/v1/1/search.php?s=${$searchTerm}`;

	// method to fetch TheMealDB API/data and to display on the frontend.
	const getTheMealDataFromHTTPRequest = async () => {
		// stores the response the requested HTTP
		const res = await fetch(url_theMealDB);

		// converts the requested data to JSON
		const data = await res.json();

		if (res.ok) {
			// IF the requested data-status is 'OK', return the fetched data to the frontend
			return data;
		} else {
			// IF the requested data-staus is NOT-'OK', THEN throw/get the error
			throw new Error(data);
		}
	};
</script>

<!-- IF the variable 'searchTerm' changes... -->
{#key $searchTerm}
	<!-- IF the variable 'searchTerm' is NOT empty... -->
	{#if $searchTerm !== ''}
		<!-- AWAIT the method 'getTheMealDataFromHTTPRequest()' and use its fetched data -->
		{#await getTheMealDataFromHTTPRequest() then data}
			<!-- IF the data is NOT empty/null/undefined... -->
			{#if data.meals}
				<!-- LOOP through the fethced data and send it as PROPS to the CARD-component to display it -->
				{#each data.meals as meal}
					<div transition:fade>
						<ComponentCard provider="mealDB" description={meal.strInstructions} />
					</div>
				{/each}
			{/if}
		{:catch error}
			<!-- IF the data cathes an error, THEN display it here -->
			<p style="color: yellow">{error.message}</p>
		{/await}
	{/if}
{/key}
