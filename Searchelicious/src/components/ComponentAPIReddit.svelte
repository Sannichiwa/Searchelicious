<script>
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	const redditThumbnail =
		'https://www.adweek.com/wp-content/uploads/2019/10/Reddit-Logo-Horizontal-600x315.png';
	$: url = `https://www.reddit.com/search.json?q=${$searchTerm} food&limit=${$searchDisplayAmount}`;

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

{#key $searchTerm}
	{#if $searchTerm !== ''}
		{#await getRedditPosts() then data}
			{#each data.data.children as post}
				<div transition:fade>
					<ComponentCard
						provider="reddit"
						title= {post.data.title}
						url={'https://www.reddit.com/' + post.data.permalink}
						thumbnail={post.data.thumbnail !== 'self' && post.data.thumbnail !== 'image' && post.data.thumbnail !== 'default'
							? post.data.thumbnail
							: redditThumbnail}
					/>
				</div>
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
{/key}
