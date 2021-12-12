<script>
	// ONLY FINISHED COMPONENTS ALLOWED HERE!
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentAPIReddit from '../components/ComponentAPIReddit.svelte';
	import ComponentAPITheMealDB from '../components/ComponentAPITheMealDB.svelte';
	import ComponentAPIWikipedia from '../components/ComponentAPIWikipedia.svelte';
</script>

<!-- <div class="header" /> -->

<div class="main">
	<div class="searchAndInstucions">
		<ComponentSearch />
	</div>

	<div class="cardContainer">
		<ComponentAPIWikipedia />
		<ComponentAPIReddit />
		<ComponentAPITheMealDB />
	</div>
</div>

<style>
	.main {
		background-image: linear-gradient(to right, rgb(46, 44, 44), rgb(114, 134, 133));
		display: grid;
		grid: auto auto / auto;
		gap: 10px;
		min-height: 100vh;
		height: 100%;
		min-width: 100vw;
		min-width: min-content;
		width: 100vw;
		/* width: 100%; */
	}

	.searchAndInstucions {
		display: grid;
	}

	.cardContainer {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		grid-row-gap: 20px;
		margin: 50px;
	}
</style>
