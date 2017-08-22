<template>
	<div>
		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-add" viewBox="0 0 32 32">
					<title>add2</title>
					<path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
				</symbol>
				<symbol id="icon-ok" viewBox="0 0 39 32">
					<title>ok</title>
					<path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
				</symbol>
				<symbol id="icon-edit" viewBox="0 0 32 32">
					<title>edit</title>
					<path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
				</symbol>
				<symbol id="icon-del" viewBox="0 0 26 32">
					<title>delete</title>
					<path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
				</symbol>
				<symbol id="icon-clock" viewBox="0 0 32 32">
					<title>clock</title>
					<path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
				</symbol>
			</defs>
		</svg>
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
							<label for="check-all" :class="{'label-checked': checkAllFlag}" @click="checkAll">{{checkAllFlag? '取消全选': '全选'}}</label>
						</div>
					</div>
					<div class="cart-item-list">
						<ul>
							<li class="list-item" v-for="(item, index) in productList">
								<div class="goods-form">
									<div class="item-goods">
										<div class="p-check">
											<input type="checkbox" :id="item.productId">
											<label :for="item.productId" :class="{'label-checked': item.checked}" @click="selectProduct(item)"></label>
										</div>
										<div class="p-goods">
											<div class="goods-img">
												<img :src="item.productImage" :alt="item.productName">
											</div>
											<div class="goods-info">{{item.productName}}</div>
										</div>
									</div>
									<div class="item">{{item.productPrice | formatPrice}}</div>
									<div class="item">
										<div class="item-center">
											<a href="javascript: void(0);" class="decrement" @click="changeQuantity(item, -1, $event)">-</a>
											<input type="text" @keyup.enter="changeVal(item, $event)" :value="item.productQuantity">
											<a href="javascript: void(0);" class="increment" @click="changeQuantity(item, 1)">+</a>
										</div>
									</div>
									<div class="item">{{item.productPrice * item.productQuantity | formatPrice}}</div>
									<div class="item">
										<a href="javascript:void(0);" class="edit-btn" @click="delProduct(index)">
											<svg class="icon icon-del"><use xlink:href="#icon-del" ></use></svg>
										</a>
									</div>
								</div>
								<div class="freebie" v-if="item.parts.length > 0">
									【赠品】<em v-for="part in item.parts">{{part.partsName}}</em>
								</div>
								<div class="freebie" v-else>【赠品】无赠品</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="cart-foot">
				<div class="cart-total">
					总价：<em>{{totalPrice | formatPrice}}</em>
				</div>
				<div class="settle-acount">
					<router-link to="address" class="btn">结账</router-link>
				</div>
			</div>
		</div>
		<!-- 阴影遮罩层 -->
		<div class="mask" v-show="maskShow"></div>
		<!-- 模态框 -->
		<div class="modal" v-show="modalShow">
			<div class="modal-title">
				<span>删除</span>
			</div>
			<div class="modal-content">
				<div class="tip-box">
					<div class="tip-warn">确认删除商品？</div>
					<div class="op-btns">
						<a href="javascript: void(0);" class="btn-cancel" title="取消" @click="delCancel">取消</a>
						<a href="javascript: void(0);" class="btn-confirm" title="删除" @click="delConfirm">删除</a>
					</div>
				</div>
			</div>
			<a href="javascript: void(0);" title="关闭" class="close-btn" @click="delCancel">X</a>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'cart',
		data() {
			return {
				productList: [],
				totalPrice: 0,
				checkAllFlag: false,
				maskShow: false,
				modalShow: false,
				index: 0
			}
		},
		// 自定义局部过滤器
		filters: {
			// 商品单价格式的处理
			formatPrice(val) {
				return '¥' + val.toFixed(2);
			}
		},
		mounted() {
			// 保证实例挂载完成
			this.$nextTick(() => {
				this.getProductData();
			})
		},
		methods: {
			getProductData() {
				this.$http.get('src/data/cart.json')
					.then(res => {
						this.productList = res.data.result.list;
						console.log(this.productList);
					})
					.catch(err => {
						console.log(error);
					});
			},
			changeQuantity(item, type, event) {
				if(type > 0) {
					item.productQuantity++;
				} else {
					item.productQuantity--;
					if(item.productQuantity <= 1) {
						item.productQuantity = 1;
					}
				}
				this.calcTotalPrice();
			},
			changeVal(item, event) {
				console.log(event.target.value);
				item.productQuantity = event.target.value;
				if(item.checked) {
					this.calcTotalPrice();
				}
			},
			selectProduct(item) {
				if(typeof item.checked === 'undefined') {
					this.$set(item, 'checked', true)
				} else {
					item.checked = !item.checked;
				}
				if(item.checked === false) {
					this.checkAllFlag = false;
				}
				this.calcTotalPrice();
			},
			checkAll() {
				this.checkAllFlag = !this.checkAllFlag;
				this.productList.forEach((item, index) => {
					if(typeof item.checked === 'undefined') {
						this.$set(item, 'checked', this.checkAllFlag)
					} else {
						item.checked = this.checkAllFlag;
					}
				});
				this.calcTotalPrice();
			},
			calcTotalPrice() {
				this.totalPrice = 0;
				this.productList.forEach((item, index) => {
					if(item.checked) {
						this.totalPrice += item.productPrice * item.productQuantity;
					}
				});
			},
			delProduct(index) {
				this.maskShow = true;
				this.modalShow = true;
				this.index = index;
			},
			delConfirm() {
				this.productList.splice(this.index, 1);
				this.maskShow = false;
				this.modalShow = false;
				this.calcTotalPrice();
			},
			delCancel() {
				this.maskShow = false;
				this.modalShow = false;
			}
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
						cursor: pointer;
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
					.label-checked {
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
						text-align: center;
						vertical-align: top;
						&:last-child {
							border-right: solid 1px #DDD;
						}
						.item-center {
							display: flex;
							width: 80px;
							margin: 0 auto;
							a {
								display: block;
								flex: 1;
								width: 0;
								height: 22px;
								border: solid 1px #DDD;
								color: #666;
								&.decrement {
									border-right: none;
								}
								&.increment {
									border-left: none;
								}
							}
							input {
								display: block;
								width: 44px;
								height: 22px;
								border: solid 1px #DDD;
								text-align: center;
							}
						}
						.edit-btn {
							display: block;
							width: 16px;
							height: 20px;
							margin: 0 auto;
							cursor: pointer;
							.icon-del {
								width: 100%;
								height: 100%;
								fill: #999;
							}
						}
					}
					.item-goods {
						position: relative;
						display: table-cell;
						width: 640px;
						padding-top: 25px;
						padding-bottom: 5px;
						border-left: solid 1px #DDD;
						.p-check {
							position: absolute;
							left: 20px;
							top: 25px;
							input {
								display: none;
								& + label {
									display: block;
									width: 16px;
									height: 16px;
									border: solid 1px #666;
									border-radius: 50%;
									cursor: pointer;
								}
							}
							.label-checked {
								border-color: #EE7A23;
								background: #EE7A23;
							}
						}
						.p-goods {
							display: flex;
							padding-left: 45px;
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
								flex: 1;
								width: 0;
								overflow: hidden;
							}
						}
					}
					.freebie {
						padding-left: 42px;
						border: solid 1px #DDD;
						border-top: none;
						em {
							margin-right: 5px;
						}
					}
				}
			}
		}
		.cart-foot {
			margin-top: 15px;
			font-size: 0;
			text-align: right;
			.cart-total {
				display: inline-block;
				margin-right: 10px;
				font-size: 14px;
				color: #999;
				em {
					font-size: 18px;
					color: #e4393c;
				}
			}
			.settle-acount {
				display: inline-block;
				width: 80px;
				height: 40px;
				line-height: 40px;
				border-radius: 5px;
				background: #e54346;
				text-align: center;
				.btn {
					display: block;
					font-size: 18px;
					color: #FFF;
				}
			}
		}
	} 
	.mask {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		z-index: 9;
	}
	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 380px;
		border: solid 2px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		overflow: hidden;
		z-index: 10;
		.modal-title {
			padding: 0 10px;
			height: 30px;
			line-height: 30px;
			background: #f3f3f3;
		}
		.modal-content {
			padding: 10px;
			height: 120px;
			background: #FFF;
			.tip-box {
				width: 240px;
				margin: 0 auto;
				.tip-warn {
					font-size: 18px;
					color: #ff6c00;
				}
				.op-btns {
					margin-top: 20px;
					text-align: center;
					font-size: 0;
					a {
						display: inline-block;
						height: 24px;
						line-height: 24px;
						padding: 0 10px;
						border-radius: 5px;
						font-size: 14px;
						color: #333;
						vertical-align: middle;
					}
					.btn-cancel {
						background: #f2f2f2;
						border: 1px solid #e1e1e1;
						margin-right: 20px;
					}
					.btn-confirm {
						background: #e74649;
						color: #FFF;
					}
				}
			}
		}
		.close-btn {
			position: absolute;
			top: 4px;
			right: 12px;
			color: #666;
		}
	}
</style>