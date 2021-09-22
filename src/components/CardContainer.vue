<template>
	<div class="card-container">
		<user-container
			:user="user"
			:categories="categories"
			:activeCategory="activeCategory"
			@set-category="dataHandler"
		></user-container>
		<stats-container
			:data="data"
			:activeCategory="activeCategory"
			@delete-item="deleteData"
		>
		</stats-container>
	</div>
</template>

<script>
export default {
	props: [
		"user",
		"data",
		"categories",
		"dataHandler",
		"activeCategory",
		"deleteData",
	],
};
</script>

<style>
.card-container {
	width: 1170px;
	height: 550px;
	display: flex;
	flex-flow: row nowrap;
	gap: 20px;
}
@media screen and (max-width: 1170px) {
	.card-container {
		width: 80%;
		height: fit-content;
		margin: 0 auto;
		flex-flow: column nowrap;
		height: fit-content;
	}
}
</style>
