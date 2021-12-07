<script>
	import ComponentSearch from '../components/ComponentSearch.svelte';
	import ComponentCard from '../components/ComponentCard.svelte';
	import ComponentCardContainer from '../components/ComponentCardContainer.svelte';

	let names = [
		'Sannichiwa',
		'Sanna',
		'Jang-With-The-Int',
		'Ronne',
		'Mojbjoj Tim',
		'Pelle R.I.P.',
		'Bärgitta',
		'Ivonlivona'
	];
</script>

<main>
	<ComponentSearch />
	<ComponentCardContainer>
		{#each names as name}
			<ComponentCard>
				{name}
			</ComponentCard>
		{/each}
	</ComponentCardContainer>
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
