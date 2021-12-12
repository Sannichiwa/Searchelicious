<script>
	// imports fade-transition-effect from the Svelte library for the HTML-element(s) to use
	import { fade } from 'svelte/transition';

	// imports shared (between all components) variables/data
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';

	// imports the CARD-component
	import ComponentCard from './ComponentCard.svelte';

	// variable(s)
	const redditThumbnail =
		'https://www.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-600x315.png';

	// $: > reactive/auto-updating variables/data. These string(s) contains HTTP-links for the API-HTTP-fetch/request
	$: url = `https://www.reddit.com/search.json?q=${$searchTerm} food&limit=${$searchDisplayAmount}`;

	// method to fetch Reddit posts(API/data) and to display on the frontend.
	const getRedditPosts = async () => {
		// stores the response the requested HTTP
		const res = await fetch(url);

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
		<!-- AWAIT the method 'getRedditPosts()' and use its fetched data -->
		{#await getRedditPosts() then data}
			<!-- LOOP through the fethced data and send it as PROPS to the CARD-component to display it -->
			{#each data.data.children as post}
				<div transition:fade>
					<ComponentCard
						provider="reddit"
						title={post.data.title}
						url={'https://www.reddit.com/' + post.data.permalink}
						thumbnail={post.data.thumbnail !== 'self' &&
						post.data.thumbnail !== 'image' &&
						post.data.thumbnail !== 'default'
							? post.data.thumbnail
							: redditThumbnail}
					/>
				</div>
			{/each}
		{:catch error}
			<!-- IF the data cathes an error, THEN display it here -->
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
{/key}
