<template>
	<router-view class="g-body"></router-view>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
html, body {
	height: 100%;
	font-size: 14px;
	line-height: 100%;
}
.g-body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
