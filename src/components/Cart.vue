<template>
	<div>
		<div class="cart-container">
			<div class="cart-title">
				<span>购物车</span>
			</div>
			<div class="cart-item-wrap">
				<div class="cart-item">
					<div class="cart-item-head">
						<ul>
							<li class="head-item item-info">商品信息</li>
							<li class="head-item item-price">商品金额</li>
							<li class="head-item item-quantity">商品数量</li>
							<li class="head-item item-totalprice">总金额</li>
							<li class="head-item item-edit">编辑</li>
						</ul>
						<div class="item-all-check">
							<input type="checkbox" id="check-all" class="check-all">
							<label for="check-all">全选</label>
						</div>
					</div>
					<div class="cart-item-list">
						<ul>
							<li class="list-item" v-for="(item, index) in productList">
								<div class="goods-form">
									<div class="item item-goods">
										<div class="p-check">
											<input type="checkbox" :id="item.productId">
											<label :for="item.productId"></label>
										</div>
										<div class="p-goods">
											<div class="goods-img">
												<img :src="item.productImage" :alt="item.productName">
											</div>
											<div class="goods-info">{{item.productName}}</div>
										</div>
									</div>
									<div class="item"></div>
									<div class="item"></div>
									<div class="item"></div>
									<div class="item"></div>
								</div>
								<div class="freebie">【赠品】</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'cart',
		data() {
			return {
				productList: []
			}
		},
		mounted() {
			this.$http.get('src/data/cart.json')
				.then(res => {
					this.productList = res.data.result.list;
					console.log(this.productList);
				})
				.catch(err => {
					console.log(error);
				});
		}
	});
</script>

<style lang="less" scoped>
	.cart-container {
		width: 1200px;
		margin: 0 auto;
		.cart-title {
			position: relative;
			text-align: center;
			line-height: 50px;
			font-size: 20px;
			&::before {
				position: absolute;
				left: 0;
				top: 50%;
				display: block;
				content: '';
				width: 100%;
				height: 1px;
				background: #CCC;
				z-index: 0;
			}
			span {
				position: relative;
				padding: 0 10px;
				font-weight: 600;
				background: #FFF;
				z-index: 1;
			}
		}
		.cart-item {
			position: relative;
			display: table;
			width: 100%;
			.cart-item-head {
				display: table-header-group;
				width: 100%;
				.head-item {
					display: table-cell;
					width: 140px;
					height: 54px;
					line-height: 54px;
					padding: 0 10px;
					background: #666;
					color: #FFF;
					text-align: center;
					font-size: 18px;
				}
				.item-info {
					width: 640px;
				}
				.item-all-check {
					position: absolute;
					left: 0;
					top: 0;
					line-height: 54px;
					font-size: 18px;
					color: #FFF;
					margin-left: 20px;
					.check-all {
						display: none;
					}
					label {
						position: relative;
						padding-left: 24px;
						&::before {
							position: absolute;
							left: 0;
							top: 2px;
							display: block;
							content: '';
							width: 16px;
							height: 16px;
							border: solid 1px #FFF;
							border-radius: 50%;
							box-sizing: border-box;
						}
					}
					.check-all:checked + label {
						&::before {
							border-color: #EE7A23;
							background: #EE7A23;
						}
					}
				}
			}
			.cart-item-list {
				display: table-row-group;
				.list-item {
					display: table-row;
					.item {
						display: table-cell;
						width: 140px;
						padding-top: 25px;
						padding-bottom: 5px;
					}
					.item-goods {
						position: relative;
						width: 640px;
						.p-check {
							position: absolute;
							left: 0;
							top: 25px;
							input {
								display: none;
								& + label {
									display: block;
									width: 16px;
									height: 16px;
									border: solid 1px #666;
									border-radius: 50%;
								}
							}
							input:checked + label {
								border-color: #EE7A23;
								background: #EE7A23;
							}
						}
						.p-goods {
							display: flex;
							padding-left: 30px;
							.goods-img {
								width: 110px;
								height: 110px;
								border: solid 1px #DDD;
								margin-right: 10px;
								font-size: 0;
								img {
									width: 100%;
								}
							}
							.goods-info {
								width: 0;
								flex: 1;
							}
						}
					}
					.freebie {
						padding-left: 28px;
					}
				}
			}
		}
	} 
</style>