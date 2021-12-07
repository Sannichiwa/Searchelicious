<script>
	export let contentToDispaly = '';
</script>

<div id="card"><slot /></div>

<style>
	#card {
		background-color: rgb(32, 192, 139);
		height: 100px;
		width: auto;
		border-radius: 15px;
		box-shadow: 2px 2px 2px black;
		font-size: 26px;
	}
</style>
