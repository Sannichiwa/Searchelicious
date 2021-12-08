<script>	
	const url = 'https://randomuser.me/api/?results=10';

	const getUsers = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (res.ok) {
			// console.log(data);
			return data;
		} else {
			throw new Error(data);
		}
	}
</script>

{#await getUsers()}
	<p>Getting users...</p>
{:then data}
	{#each data.results as user}
		<p>{user.name.first} {user.name.last}</p>
	{:else}
		<p>User not found :(</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
