<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	// $: newNumber = $searchDisplayAmount

	const redditThumbnail =
		'https://www.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-600x315.png';
	$: url = `https://www.reddit.com/search.json?q=${$searchTerm}&limit=${$searchDisplayAmount}`;

	onMount(async () => {
		getRedditPosts();
	});

	const getRedditPosts = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	};
</script>

<!-- {#key $searchDisplayAmount}
	{#if initialData}
		{#each initialData.data.children as post}
			<ComponentCard
				title={post.data.title}
				url={'https://www.reddit.com/' + post.data.permalink}
				thumbnail={post.data.thumbnail !== 'self' ? post.data.thumbnail : redditThumbnail}
			/>
		{/each}
	{/if}
{/key} -->
<!-- {#key $searchDisplayAmount || $searchTerm} -->
{#key $searchDisplayAmount}
	{#await getRedditPosts()}
		<p>Getting Reddit post(s)...</p>
	{:then data}
		{#each data.data.children as post}
			<div transition:fade>
				<ComponentCard
					title={post.data.title}
					url={'https://www.reddit.com/' + post.data.permalink}
					thumbnail={post.data.thumbnail !== 'self'
						? post.data.thumbnail
						: post.data.thumbnail !== 'image'
						? redditThumbnail
						: post.data.thumbnail}
				/>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/key}
