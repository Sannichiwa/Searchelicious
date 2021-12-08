<script>
	const keyAPI = 'a07ba8af78364f52b0f3a4937efe5d55';
	const displayAmount = 1;
	const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${keyAPI}&ingredients=tomato&number=${displayAmount}`;

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
</script>

{#await getRecipe()}
	<p>Getting resipe...</p>
{:then data}
	{#each data as resipe}
		<h3>{resipe.title}</h3>
		<img src={resipe.image} alt="Picture of video thumbnail" srcset="" />
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
