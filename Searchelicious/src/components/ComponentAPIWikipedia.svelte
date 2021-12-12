<script>
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	const flickrKey = '70b6853e70c78137299f931a2d602700';
	const flickrSecret = '14761472060a32a9';
	let flickrImageIDs = [];

	$: url_flickrPhotoSearch = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=70b6853e70c78137299f931a2d602700&tags=food&text=${$searchTerm}&per_page=${$searchDisplayAmount}&format=json&nojsoncallback=1`;
	$: url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${$searchDisplayAmount}&srsearch=${$searchTerm}`;

	const getWikipediaInformation = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			await getFlickrPhotoSearchData();
			return data;
		} else {
			throw new Error(data);
		}
	};

	const getFlickrPhotoSearchData = async () => {
		const res = await fetch(url_flickrPhotoSearch);
		const data = await res.json();

		if (res.ok) {
			flickrImageIDs = data.photos.photo;
			return data;
		} else {
			throw new Error(data);
		}
	};

	// a method to attach secret key, image id and image server to a flickr url, to get a specific image
	const getFlickrPhoto = (imageIndex) => {
		const imageID = flickrImageIDs[imageIndex].id;
		const imageSecret = flickrImageIDs[imageIndex].secret;
		const imageServer = flickrImageIDs[imageIndex].server;
		let imageURL = `https://live.staticflickr.com/${imageServer}/${imageID}_${imageSecret}.jpg`;
		return `https://live.staticflickr.com/${imageServer}/${imageID}_${imageSecret}.jpg`;
	};
</script>

{#key $searchTerm}
{#if $searchTerm !== ''}

	{#await getWikipediaInformation() then data}
		{#each data.query.search as post, i}
			<div transition:fade>
				<ComponentCard
					provider="wikipedia"
					description={post.snippet}
					url={`https://en.wikipedia.org/?curid=${post.pageid}`}
					thumbnail={getFlickrPhoto(i)}
				/>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
	{/if}
{/key}
