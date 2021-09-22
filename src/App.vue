<template>
	<card-container
		:user="userInfo"
		:data="dataManaged"
		:categories="categories"
		:dataHandler="setData"
		:activeCategory="activeCategory"
		:deleteData="deleteData"
	/>
</template>

<script>
export default {
	data() {
		return {
			userInfo: {
				img: "image-jeremy.png",
				name: "Jeremy",
				surname: "Robson",
			},
			userData: [
				{
					color: "#f0906d",
					img: "icon-work.svg",
					title: "Work",
					timeframes: {
						daily: {
							current: 5,
							previous: 7,
						},
						weekly: {
							current: 32,
							previous: 36,
						},
						monthly: {
							current: 103,
							previous: 128,
						},
					},
				},
				{
					color: "#72c1e1",
					img: "icon-play.svg",
					title: "Play",
					timeframes: {
						daily: {
							current: 1,
							previous: 2,
						},
						weekly: {
							current: 10,
							previous: 8,
						},
						monthly: {
							current: 23,
							previous: 29,
						},
					},
				},
				{
					color: "#ee6a7f",
					img: "icon-study.svg",
					title: "Study",
					timeframes: {
						daily: {
							current: 0,
							previous: 1,
						},
						weekly: {
							current: 4,
							previous: 7,
						},
						monthly: {
							current: 13,
							previous: 19,
						},
					},
				},
				{
					color: "#71cd7f",
					img: "icon-exercise.svg",
					title: "Exercise",
					timeframes: {
						daily: {
							current: 1,
							previous: 1,
						},
						weekly: {
							current: 4,
							previous: 5,
						},
						monthly: {
							current: 11,
							previous: 18,
						},
					},
				},
				{
					color: "#6940ca",
					img: "icon-social.svg",
					title: "Social",
					timeframes: {
						daily: {
							current: 1,
							previous: 3,
						},
						weekly: {
							current: 5,
							previous: 10,
						},
						monthly: {
							current: 21,
							previous: 23,
						},
					},
				},
				{
					color: "#ebc76c",
					img: "icon-self-care.svg",
					title: "Self Care",
					timeframes: {
						daily: {
							current: 0,
							previous: 1,
						},
						weekly: {
							current: 2,
							previous: 2,
						},
						monthly: {
							current: 7,
							previous: 11,
						},
					},
				},
			],
			dataManaged: [],
			categories: [],
			activeCategory: "",
		};
	},
	methods: {
		setData(timeframe) {
			this.dataManaged = this.userData.map((element) => {
				let object = {
					color: element.color,
					img: element.img,
					title: element.title,
					timeframes: element.timeframes[timeframe],
				};
				return object;
			});
			this.activeCategory = timeframe;
		},
		deleteData(id, timeframe) {
			this.userData[id].timeframes[timeframe].current = 0;
			this.userData[id].timeframes[timeframe].previous = 0;
		},
	},

	created() {
		// LIST OF CATEGORIES CREATION
		this.userData.forEach((element) => {
			for (let i in element.timeframes) {
				if (!this.categories.includes(i)) {
					this.categories.push(i);
				}
			}
		});
		// DATA MANAGED DEFAULT SET
		this.setData("daily");
	},
};
</script>

<style>
.debug * {
	border: 1px solid black;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--dark-blue: rgb(14, 19, 34);
	--dark-violet: rgb(29, 33, 72);
	--light-violet: rgb(82, 79, 225);
	--trans: 0.2s ease-in-out;
}

@import url("https://fonts.googleapis.com/css2?family=Yaldevi:wght@200;300;400;500;600;700&display=swap");

body {
	width: 100%;
	min-height: 100vh;
	color: white;
	background-color: var(--dark-blue);
	font-family: "Yaldevi", sans-serif;
}

#app {
	width: 100%;
	min-height: 100vh;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
