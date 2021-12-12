<script>
	// ONLY FINISHED COMPONENTS ALLOWED HERE!
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentAPIReddit from '../components/ComponentAPIReddit.svelte';
	import ComponentAPITheMealDB from '../components/ComponentAPITheMealDB.svelte';
	import ComponentAPIWikipedia from '../components/ComponentAPIWikipedia.svelte';
</script>

<div class="mainPageContainer">
	<div id="firstCh" />

	<div>
		<ComponentSearch />
	</div>

	<div class="cardContainer">
		<ComponentAPIWikipedia />
		<ComponentAPIReddit />
		<ComponentAPITheMealDB />
	</div>
</div>

<style>
	.mainPageContainer {
		/* background-color: rgb(216, 216, 216); */
		background-image: linear-gradient(to right, rgb(46, 44, 44), rgb(114, 134, 133));
		grid-auto-flow: row;
		gap: 10px;
		align-content: center;
		justify-content: center;
		min-height: 100vh;
		/* min-height: 100%; */
		height: 100%;
	}

	#firstCh {
		height: 100px;
	}

	.cardContainer {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-column-gap: 10px;
		grid-row-gap: 10px;
		margin: 10px;
		/* height: 100vh; */
	}
</style>
