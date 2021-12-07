<script></script>

<div id="cardContainer">
	<slot />
</div>

<style>
	#cardContainer {
		/* background-color: rgb(8, 112, 77); */
		display: grid;
		grid-template-columns: repeat(5, auto);
		gap: 10px;
		height: 70vh;
		width: 70vw;
	}
</style>
