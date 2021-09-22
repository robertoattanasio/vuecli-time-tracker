<template>
	<div class="stats-container">
		<div
			v-for="(item, index) in data"
			:key="index"
			class="stats-item"
			:style="{ backgroundColor: item.color }"
		>
			<img :src="require(`../assets/images/${item.img}`)" />
			<div class="stats-item-data">
				<div class="title">
					<p class="title">{{ item.title }}</p>
					<i
						class="fas fa-trash-alt"
						@click="deleteItemData(index, activeCategory)"
					></i>
				</div>
				<div class="time">{{ item.timeframes.current }}hrs</div>
				<div class="prev-time">Last Week {{ item.timeframes.previous }}hrs</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ["data", "activeCategory"],
	emits: ["delete-item"],
	methods: {
		deleteItemData(id, category) {
			this.$emit("delete-item", id, category);
		},
	},
};
</script>
<style>
.stats-container {
	flex: 1 1 auto;
	height: 100%;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
}

.stats-item {
	position: relative;
	overflow: hidden;
	background-clip: padding-box;
	padding: 0 10px;
	border-radius: 20px;
	text-align: right;
}
@media screen and (max-width: 1170px) {
	.stats-container {
		width: 100%;
		height: fit-content;
		grid-template-columns: 1fr;
	}
	.stats-item {
		height: 250px;
	}
}
.stats-item img {
	width: 60px;
}

.stats-item-data {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 84%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 20px;
	background-color: var(--dark-violet);
	display: flex;
	flex-flow: column nowrap;
	text-align: left;
}
.stats-item-data .title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.stats-item-data p.title {
	font-size: 24px;
}
.stats-item-data .time {
	margin: 40px 0 10px;
	font-size: 42px;
}
.stats-item-data .prev-time {
	font-size: 18px;
	opacity: 0.8;
}
.stats-item-data i {
	opacity: 0.6;
	transition: var(--trans);
}
.stats-item-data i:hover {
	cursor: pointer;
	opacity: 1;
}
</style>
