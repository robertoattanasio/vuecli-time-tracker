<template>
	<div class="user-container">
		<div class="user-info">
			<img :src="require(`../assets/images/${user.img}`)" />
			<p class="report">Report for</p>
			<h2 class="name">{{ user.name }}</h2>
			<h2 class="surname">{{ user.surname }}</h2>
		</div>
		<div class="category-menu">
			<ul>
				<li
					v-for="category in categories"
					:key="category"
					@click="selectCategory(category)"
					:style="
						category == activeCategory ? { opacity: 1 } : { opacity: 0.6 }
					"
				>
					{{ category }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props: ["user", "categories", "activeCategory"],
	emits: ["set-category"],
	methods: {
		selectCategory(timeframe) {
			this.$emit("set-category", timeframe);
		},
	},
};
</script>
<style>
.user-container {
	width: 270px;
	height: 100%;
	overflow: hidden;
	border-radius: 20px;
	background-color: var(--dark-violet);
	display: flex;
	flex-flow: column nowrap;
}

@media screen and (max-width: 1170px) {
	.user-container {
		width: 100%;
	}
}
.user-info {
	width: 100%;
	height: 70%;
	border-radius: 20px;
	padding: 20px;
	background-color: var(--light-violet);
}
.user-info img {
	width: 90px;
	height: 90px;
	border: 4px solid white;
	border-radius: 100%;
	overflow: hidden;
}
.user-info p.report {
	margin: 50px 0 10px;
	font-size: 12px;
}
.user-info h2.name,
.user-info h2.surname {
	font-size: 38px;
	font-weight: 600;
	letter-spacing: 0.1em;
}
.category-menu {
	width: 100%;
	height: 30%;
	padding: 20px;
	display: flex;
	align-items: center;
}
.category-menu ul {
	width: 100%;
	list-style: none;
	display: flex;
	flex-flow: column nowrap;
	gap: 20px;
	transition: var(--trans);
}
.category-menu ul li {
	width: fit-content;
	opacity: 0.6;
}
.category-menu ul li:hover {
	cursor: pointer;
	opacity: 1;
}
</style>
