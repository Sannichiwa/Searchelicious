<script>
	const keyAPI = 'a07ba8af78364f52b0f3a4937efe5d55';
	const displayAmount = 2;
	const ingredient = 'pizza';
	const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${keyAPI}&ingredients=${ingredient}&number=${displayAmount}`;
	const url_full = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyAPI}&query=${ingredient}&maxFat=25&number=${displayAmount}`;

	const getRecipe = async () => {
		const res = await fetch(url_full);
		const data = await res.json();

		if (res.ok) {
			// console.log(data);
			return data;
		} else {
			throw new Error(data);
		}
	};
</script>

{#await getRecipe()}
	<p>Getting resipe...</p>
{:then data}
	{console.log(data.results)}
	{#each data.results as resipe}
		<h3>{resipe.title}</h3>
		<img src={resipe.image} alt="Picture of video thumbnail" srcset="" />
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
