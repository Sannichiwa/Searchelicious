<script>
	// ONLY FINISHED COMPONENTS ALLOWED HERE!
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentCard from '../components/ComponentCard.svelte';
	import ComponentCardContainer from '../components/ComponentCardContainer.svelte';
	import ComponentAPIYouTubeSearch from '../components/ComponentAPIYouTubeSearch.svelte';
	import CompRestAPITest from '../components/_CompRestAPITest.svelte';
	import ComponentAPISpoonacular from '../components/ComponentAPISpoonacular.svelte';
	import ComponentAPIReddit from '../components/ComponentAPIReddit.svelte';
</script>

<main>
	<ComponentAPIReddit />

	<!-- <ComponentSearch />
	<ComponentCardContainer>
		{#each names as name}
			<ComponentCard>
				{name}
			</ComponentCard>
		{/each}
	</ComponentCardContainer> -->
</main>

<style>
	main {
		display: grid;
		gap: 10px;
		align-content: center;
		justify-content: center;
		margin: 10px;
	}
</style>
