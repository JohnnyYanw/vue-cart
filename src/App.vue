<template>
	<div class="g-body">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
html, body {
	height: 100%;
	font-size: 14px;
	color: #2c3e50;
}
.g-body {
	/* 让字体更清晰 */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
