<template>
	<view class="uni-padding-wrap">
		<view class="uni-common-mt">
			<view class="by-editphone" style="background-image: url(../../../static/edit-phone-bg.png);">
				<view class="text by-editphone-text">{{mobile}}</view>
			</view>
		</view>
		<view class="uni-common-mt">
			<button type="warn" class="by-button-submit" :loading="loading" @click="goDetailPage('/pages/user/info/editphoneTo?mobile='+mobile)">下一步</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loading: false,
				mobile: ''
			}
		},
		onLoad(e) {
			if (e.mobile) {
				this.mobile = e.mobile;
			}
		},
		onShow() {},
		onShareAppMessage() {
			return {
				title: this.webshareTitle,
				path: '/pages/tabBar/index/index'
			}
		},
		methods: {
			goDetailPage(url) {
				const openid = this.$store.state.openid;
				if (openid === null) {
					uni.navigateTo({
						url: '/pages/user/login/login'
					})
				} else {
					uni.navigateTo({
						url: url
					})
				}

			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
		background-color: #f7f8fa;
	}

	.by-editphone {
		margin-top: 120upx;
		width: 100%;
		height: 375upx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.by-editphone-text {
		padding-top: 225upx;
		margin-left: 180upx;
		font-size: 32upx;
		font-weight: 600;
	}

	.by-button-submit {
		background-color: #fd5950;
		background: linear-gradient(left, #ff7575, #fd5950);
	}
</style>
