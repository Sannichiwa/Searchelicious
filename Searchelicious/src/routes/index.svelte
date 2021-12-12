<script>
	// ONLY FINISHED COMPONENTS ALLOWED HERE!
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentCard from '../components/ComponentCard.svelte';
	import ComponentCardContainer from '../components/ComponentCardContainer.svelte';
	import ComponentAPIYouTubeSearch from '../components/ComponentAPIYouTubeSearch.svelte';
	import CompRestAPITest from '../components/_CompRestAPITest.svelte';
	import ComponentAPISpoonacular from '../components/ComponentAPISpoonacular.svelte';
	import ComponentAPIReddit from '../components/ComponentAPIReddit.svelte';
	import ComponentAPIRandomUsers from '../components/ComponentAPIRandomUsers.svelte';
	import ComponentAPITheMealDB from '../components/ComponentAPITheMealDB.svelte';
	import ComponentAPIWikipedia from '../components/ComponentAPIWikipedia.svelte';
</script>

<main>
	<ComponentSearch />
	<div class="cardContainer">
		<ComponentAPIWikipedia />
		<ComponentAPIReddit />
		<ComponentAPITheMealDB />
		<!-- <ComponentAPIRandomUsers /> -->
		<!-- <ComponentAPISpoonacular /> -->
	</div>
</main>

<style>
	main {
		background-color: gray;
		/* display: grid; */
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
