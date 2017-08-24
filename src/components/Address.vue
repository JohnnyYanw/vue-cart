<template>
	<div class="address-container">
		<!-- 配送地址 -->
		<div class="item-title">
			<span>配送地址</span>
		</div>
		<div class="address-wrap">
			<div class="address-list" :class="{'addr-default': item.isDefault}" v-for="(item, index) in filterAddress">
				<dl>
					<dt>{{item.userName}}</dt>
					<dd class="address">{{item.streetName}}</dd>
					<dd class="tel">{{item.tel}}</dd>
				</dl>
				<div class="addr-opration" v-show="item.isDefault">默认地址</div>
				<div class="addr-opration set-default" v-show="!item.isDefault" @click="setDefault(item.addressId)">设为默认</div>
			</div>
			<!-- <div class="address-list address-new">
				
			</div> -->
			<div class="addr-more" v-if="addrList.length > initNum">
				<a href="javascript: void(0);" class="more-btn" @click="showMoreAddr">
					<span>{{showMore? '更多地址': '收起地址'}}</span>
					<span class="up-down-icon" :class="showMore? 'down-icon': 'up-icon'">
						<i class="icon-l"></i>
						<i class="icon-r"></i>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		name: 'address',
		data() {
			return {
				addrList: [],
				initNum: 3,
				limitNum: 3,
				showMore: true
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.getAddress();
			})
		},
		computed: {
			filterAddress() {
				return this.addrList.slice(0, this.limitNum);
			}
		},
		methods: {
			getAddress() {
				this.$http.get('src/data/address.json')
					.then(res => {
						let data = res.data;
						console.log(data.result);
						if(data.status === 0) {
							this.addrList = data.result;
						}
					})
					.catch(err => {
						console.log(err);
					})
			},
			setDefault(addrId) {
				this.addrList.forEach((item, index) => {
					if(item.addressId === addrId) {
						item.isDefault = true;
					} else {
						item.isDefault = false;
					}
				})
			},
			showMoreAddr() {
				if(this.showMore === true) {
					this.limitNum = this.addrList.length;
					this.showMore = false;
				} else {
					this.limitNum = this.initNum;
					this.showMore = true;
				}
			}
		}
	});
</script>

<style lang="less" scoped>
	.address-container {
		width: 1200px;
		margin: 0 auto;
		.item-title {
			position: relative;
			text-align: center;
			line-height: 50px;
			margin: 20px auto;
			font-size: 18px;
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
		.address-wrap {
			font-size: 0;
			.address-list {
				position: relative;
				display: inline-block;
				width: 23.5%;
				margin-left: 2%;
				margin-bottom: 10px;
				padding: 20px 20px 40px 20px;
				border: solid 2px #DDD;
				font-size: 14px;
				color: #333;
				&:nth-child(4n+1) {
					margin-left: 0;
				}
				&:hover {
					border-color: #EE7A23;
				}
				dt {
					font-size: 18px;
				}
				dd {
					line-height: 20px;
					margin-bottom: 5px;
					&.address {
						height: 40px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					&.tel {
						color: #605F5F;
					}
				}
				.addr-opration {
					position: absolute;
					left: 20px;
					bottom: 15px;
					color: #EE7A23;
				}
				.set-default {
					cursor: pointer;
				}
			}
			.addr-default {
				border-color: #EE7A23;
			}
			.addr-more {
				width: 100%;
				margin-top: 10px;
				text-align: center;
				.more-btn {
					color: #EE7A23;
					span {
						position: relative;
						display: inline-block;
						font-size: 16px;
					}
					.up-down-icon {
						width: 14px;
						height: 6px;
						margin-left: 2px;
						transition: transform .3s ease-out;
						transform: translateY(1px);
						i {
							position: absolute;
							top: 0;
							width: 8px;
							height: 1px;
							background-color: #EE7A23;
							transition: transform .3s ease-out;
						}
					}
					.down-icon {
						.icon-l {
							left: 0;
							transform: rotate(40deg);
						}
						.icon-r {
							right: 0;
							transform: rotate(-40deg);
						}
					}
					.up-icon {
						.icon-l {
							left: 0;
							transform: rotate(-40deg);
						}
						.icon-r {
							right: 0;
							transform: rotate(40deg);
						}
					}
				}
			}
		}
	}
</style>