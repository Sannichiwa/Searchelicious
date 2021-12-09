<script>
	const redditThumbnail =
		'https://www.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-600x315.png';

	const keyAPI = 'a07ba8af78364f52b0f3a4937efe5d55';
	const displayAmount = 2;
	const searchTerm = 'humus';
	const url = `https://www.reddit.com/search.json?q=${searchTerm}&limit=${displayAmount}`;
	const url_full = 'https://www.reddit.com/search.json?q=pizza&limit=2';

	const getRecipe = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			console.log(data);
			return data;
		} else {
			throw new Error(data);
		}
	};

	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}
</script>

<main>
	{#await getRecipe()}
		<p>Getting Reddit post(s)...</p>
	{:then data}
		<!-- {console.log(data.data.children)} -->
		{#each data.data.children as post}
			<div
				class="card"
				on:click={() => openInNewTab('https://www.reddit.com/' + post.data.permalink)}
			>
				<div class="title">{post.data.title}</div>

				{#if post.data.thumbnail !== 'self'}
					<img src={post.data.url} alt="Thumbnail" />
				{:else}
					<img src={redditThumbnail} alt="Thumbnail" />
				{/if}
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>

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
		height: 400px;
		width: 500px;
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
		font-size: 20px;
	}

	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}
</style>
