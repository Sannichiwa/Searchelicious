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
		<p>Relevant post from Reddit</p>
		<div class="title">{title}</div>
		<img src={thumbnail} alt={title} />
	</div>
{:else if provider === 'wikipedia'}
	<!-- WIKIPEDIA -->
	<div class="card" on:click={() => openURLInNewTab(url)}>
		<p>Did you know?</p>
		<div>{@html description}</div>
		<img src={thumbnail} alt="something delicious" />
	</div>
{:else if provider === 'mealDB'}
	<!-- THE-MEAL-DB -->
	<div class="card" on:click={() => openURLInNewTab(url)}>
		<p>This is how you do it</p>
		<div>{description}</div>
	</div>
{/if}

<style>
	/* card  */
	.card {
		background-image: linear-gradient(
			to right,
			rgb(208, 211, 210),
			rgb(124, 149, 156),
			rgb(83, 103, 192)
		);
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
		height: 250px;
		width: 300px;
		border-radius: 15px;
		box-shadow: 2px 2px 2px rgb(56, 56, 56);
		cursor: pointer;
		padding: 25px;
		overflow: scroll;
	}

	/* every div in card */
	.card div {
		text-align: center;
	}
	.card p {
		font-size: 20px;
		text-align: center;
	}

	::-webkit-scrollbar {
		width: 3px;
		height: 5px;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgb(53, 53, 53);
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: rgb(206, 188, 188);
		border-radius: 10px;
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
