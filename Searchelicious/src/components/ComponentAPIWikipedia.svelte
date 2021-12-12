<script>
	// imports fade-transition-effect from the Svelte library for the HTML-element(s) to use
	import { fade } from 'svelte/transition';

	// imports shared (between all components) variables/data
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';

	// imports the CARD-component
	import ComponentCard from './ComponentCard.svelte';

	// variable(s)
	const flickrAPIKey = '70b6853e70c78137299f931a2d602700';
	const flickrSecret = '14761472060a32a9';
	let flickrImageIDs = [];

	// $: > reactive/auto-updating variables/data. These string(s) contains HTTP-links for the API-HTTP-fetch/request
	$: url_flickrPhotoSearch = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=70b6853e70c78137299f931a2d602700&tags=food&text=${$searchTerm}&per_page=${$searchDisplayAmount}&format=json&nojsoncallback=1`;
	$: url_wikipedia = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${$searchDisplayAmount}&srsearch=${$searchTerm} food`;

	// method to fetch Wikipedia API/data and to display it together with data from Flickr.
	const getWikipediaDataFromHTTPRequest = async () => {
		// stores the response the requested HTTP
		const res = await fetch(url_wikipedia);

		// converts the requested data to JSON
		const data = await res.json();

		if (res.ok) {
			// IF the requested data-status is 'OK', then wait for Flickr-data to be fetched, and THEN display it Wikipedias and Flickrs data on the frontend
			await getFlickrDataFromHTTPRequest();
			return data;
		} else {
			// IF the requested data-staus is NOT-'OK', THEN throw/get the error
			throw new Error(data);
		}
	};

	// method to fetch Flickr API/data and to display it together with data from Flickr.
	const getFlickrDataFromHTTPRequest = async () => {
		// stores the response the requested HTTP
		const res = await fetch(url_flickrPhotoSearch);

		// converts the requested data to JSON
		const data = await res.json();

		if (res.ok) {
			// IF the requested data-status is 'OK', then add the data to the 'flickrImageIDs'-array, and THEN display it Wikipedias and Flickrs data on the frontend
			flickrImageIDs = data.photos.photo;
		} else {
			// IF the requested data-staus is NOT-'OK', THEN throw/get the error
			throw new Error(data);
		}
	};

	// a method to attach secret key, image id and image server to a flickr url, to get a specific image. This method returns a image-URL
	const getFlickrPhoto = (imageIndex) => {
		const imageID = flickrImageIDs[imageIndex].id;
		const imageSecret = flickrImageIDs[imageIndex].secret;
		const imageServer = flickrImageIDs[imageIndex].server;
		return `https://live.staticflickr.com/${imageServer}/${imageID}_${imageSecret}.jpg`;
	};
</script>

<!-- IF the variable 'searchTerm' changes... -->
{#key $searchTerm}
	<!-- IF the variable 'searchTerm' is NOT empty... -->
	{#if $searchTerm !== ''}
		<!-- AWAIT the method 'getWikipediaDataFromHTTPRequest()' and use its fetched data -->
		{#await getWikipediaDataFromHTTPRequest() then data}
			<!-- LOOP through the fethced data and send it as PROPS to the CARD-component to display it -->
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
			<!-- IF the data cathes an error, THEN display it here -->
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
{/key}
