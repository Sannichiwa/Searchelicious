<script>
	const getInfo = async (searchForContent, maxResult) => {
		const youtubeAPI = 'AIzaSyCguKKcIDbwU1R7yZQ57w6OGNlT0y4ZeyM';
		const googleYoutubeAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${searchForContent}&key=${youtubeAPI}`;

		const res = await fetch(googleYoutubeAPI);
		const data = await res.json();

		if (res.ok) return data;
		else throw new Error(data);
	};

	// const url = 'https://randomuser.me/api/?results=10';

	// async function getUsers() {
	// 	const res = await fetch(url);
	// 	const data = await res.json();

	// 	if (res.ok) {
	// 		// console.log(data);
	// 		return data;
	// 	} else {
	// 		throw new Error(data);
	// 	}
	// }
</script>

{#await getInfo('Pizza', 1)}
	<p>Getting users...</p>
{:then data}
	{#each data.items as video}
		{console.log(video.snippet)}
		<h3>{video.snippet.title}</h3>
		<img src={video.snippet.thumbnails.high.url} alt="Picture of video thumbnail" srcset="" />
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
