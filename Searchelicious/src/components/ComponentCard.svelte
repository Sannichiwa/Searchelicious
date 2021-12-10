<script>
	// these are the PROPS of this element
	export let title = '';
	export let url = '';
	export let thumbnail =
		'https://www.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-600x315.png';

	const openURLInNewTab = (urlAddress) => {
		window.open(urlAddress, '_blank').focus();
	};
</script>

<div class="card" on:click={() => openURLInNewTab(url)}>
	<div class="title">{title}</div>

	{#if { thumbnail } !== 'self'}
		<img src={thumbnail} alt="Thumbnail" />
	{:else}
		<img src={thumbnail} alt="Thumbnail" />
	{/if}
</div>

<style>
	main {
		/* background-color: gray; */
		display: grid;
		gap: 10px;
	}

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
