<script>
	// ONLY FINISHED COMPONENTS ALLOWED HERE!
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentAPIReddit from '../components/ComponentAPIReddit.svelte';
	import ComponentAPITheMealDB from '../components/ComponentAPITheMealDB.svelte';
	import ComponentAPIWikipedia from '../components/ComponentAPIWikipedia.svelte';
</script>

<main>
	<ComponentSearch />
	<div class="cardContainer">
		<ComponentAPIWikipedia />
		<ComponentAPIReddit />
		<ComponentAPITheMealDB />
	</div>
</main>

<style>
	main {
		background-color: gray;
		grid-auto-flow: row;
		gap: 10px;
		align-content: center;
		justify-content: center;
		margin: 10px;
	}

	.cardContainer {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		margin: 10px;
	}
</style>
