<script>
	// these are the PROPS of this element
	export let provider = '';
	export let title = '';
	export let description = '';
	export let url = '';
	export let thumbnail = '';

	const openURLInNewTab = (urlAddress) => {
		window.open(urlAddress, '_blank').focus();
	};
</script>

{#if provider === 'reddit'}
	<!-- REDDIT -->
	<div class="card" on:click={() => openURLInNewTab(url)}>
		<div class="title">{title}</div>
		<img src={thumbnail} alt={title} />
	</div>
{:else if provider === 'wikipedia'}
	<!-- WIKIPEDIA -->
	<div class="card" on:click={() => openURLInNewTab(url)}>
		<!-- <div id="wikiSpan" /> -->
		<div>{@html description}</div>
		<img src={thumbnail} alt="something delicious" />
	</div>
{:else if provider === 'mealDB'}
	<!-- THE-MEAL-DB -->
	<div class="card" on:click={() => openURLInNewTab(url)}>
		<div>{description}</div>
	</div>
{/if}

<style>
	/* card  */
	.card {
		background-color: rgb(87, 87, 87);
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
		align-content: center;
		justify-content: center;
		height: 250px;
		width: 300px;
		border-radius: 15px;
		box-shadow: 2px 2px 2px rgb(56, 56, 56);
		cursor: pointer;
		padding: 5px;
		overflow: scroll;
	}

	/* every div in card */
	.card div {
		margin: 10px;
		text-align: center;
	}

	.title {
		font-size: 100%;
	}

	img {
		height: 120px;
		width: 100%;
		object-fit: cover;
	}
</style>
