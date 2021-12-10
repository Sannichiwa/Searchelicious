<script>
	import { fade } from 'svelte/transition';
	import { searchDisplayAmount, searchTerm } from '../stores/stores.js';
	import ComponentCard from './ComponentCard.svelte';

	$: url = `https://randomuser.me/api/?results=${$searchDisplayAmount}`;

	const getUsers = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			// console.log(data);
			return data;
		} else {
			throw new Error(data);
		}
	};
</script>

<!-- {#await getUsers()}
	<p>Getting users...</p>
{:then data}
	{#each data.results as user}
		<p></p>
	{:else}
		<p>User not found :(</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->
{#key $searchDisplayAmount}
	{#await getUsers()}
		<p>Getting user(s)...</p>
	{:then data}
		{#each data.results as user}
			<div transition:fade>
				<ComponentCard
					title={user.name.first + user.name.last}
					url={'https://www.reddit.com/'}
					thumbnail={user.picture.large}
				/>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/key}
