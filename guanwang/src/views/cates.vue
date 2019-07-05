<template>
	<div class="cate">
		<navs></navs>
		<div class="leb">
			<ul class="leb-box">
				<li v-for="(item,index) in items" @click="btn(index) " :class="{active:active1===index}">{{item}}</li>
			</ul>
		</div>
		<div class="con">
			<div v-if="active1===0">
				<p>- 和田玉器型 -</p>
				<ul class="con1">
					<li v-for="(item,index) in items1">
						<a :href="item.href" style="display: block;" >
							<img class="percent" :src="item.url" alt=""><span>{{item.name}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div v-if="active1===1">
				<p>- 和田玉题材 -</p>
				<ul class="con1">
					<li v-for="(item,index) in items2">
						<a :href="item.href" style="display: block;" >
							<img class="percent" :src="item.url" alt=""><span>{{item.name}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div v-if="active1===2">
				<p>- 和田玉颜色 -</p>
				<ul class="con1">
					<li v-for="(item,index) in items3">
						<a :href="item.href" style="display: block;" >
							<img class="percent" :src="item.url" alt=""><span>{{item.name}}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	export default {
		name: "cate",
		data() {
			return {
				active1: 0,
				items: [
					"器型",
					"题材",
					"颜色",
				],
				items1: [{
					url: require("@/assets/shape-hand.jpg"),
					name: "手镯",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=959jj7an&reft=1561089112792&spm=f.80011226"
				},{
					url: require("@/assets/shape-down.jpg"),
					name: "吊坠",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=1en2yvvbe&reft=1561089381558&spm=f.80011226"
				},{
					url: require("@/assets/shape-play.jpg"),
					name: "把件",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=b8hpd1pu&reft=1561089403030&spm=f.80011226"
				},{
					url: require("@/assets/shape-card.jpg"),
					name: "玉牌",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=vajefdfd1&reft=1561089421582&spm=f.80011226"
				},{
                    url: require("@/assets/shape-beads.jpg"),
                    name: "串珠",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E4%B8%B2%E7%8F%A0&kdt_id=43111712"
                },{
                    url: require("@/assets/shape-necklace.jpg"),
                    name: "项链",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E9%A1%B9%E9%93%BE&kdt_id=43111712"
                },{
                    url: require("@/assets/shape-articles.jpg"),
                    name: "摆件",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E6%91%86%E4%BB%B6&kdt_id=43111712"
                },{
                    url: require("@/assets/shape-hands.jpg"),
                    name: "手链",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E6%89%8B%E9%93%BE&kdt_id=43111712"
                }],
				items2: [{
					url: require("@/assets/theme-god.jpg"),
					name: "观音",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=5if1kid8&reft=1561089464886&spm=f.80011226"
				},{
					url: require("@/assets/theme-godman.jpg"),
					name: "佛",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=dmiakm8q&reft=1561089492534&spm=f.80011226"
				},{
					url: require("@/assets/theme-eat.jpg"),
					name: "貔貅",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=48naawz1&reft=1561089523366&spm=f.80011226"
				},{
					url: require("@/assets/theme-look.jpg"),
					name: "鉴赏",
					href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=56qxccab&reft=1561089544006&spm=f.80011226"
				},{
                    url: require("@/assets/theme-want.jpg"),
                    name: "如意",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E5%A6%82%E6%84%8F&kdt_id=43111712"
                },{
                    url: require("@/assets/theme-squirty.jpg"),
                    name: "平安扣",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E5%B9%B3%E5%AE%89%E6%89%A3&kdt_id=43111712"
                },{
                    url: require("@/assets/theme-witer.jpg"),
                    name: "山水",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E5%B1%B1%E6%B0%B4&kdt_id=43111712"
                },],
				items3: [{
					url: require("@/assets/color-white.jpg"),
					name: "白玉",
                    href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=um9fy9p2&reft=1561089599246&spm=f.80011226"
				},{
					url: require("@/assets/color-blue.jpg"),
					name: "碧玉",
                    href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=ani6qvaq&reft=1561089612269&spm=f.80011226"
				},{
					url: require("@/assets/color-green.jpg"),
					name: "青玉",
                    href:"https://shop43303880.youzan.com/v2/showcase/tag?alias=bwxtwzwf1&reft=1561089660302&spm=f.80011226"
				},{
					url: require("@/assets/color-yellow.jpg"),
					name: "黄玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E9%BB%84%E7%8E%89&kdt_id=43111712"
				},{
                    url: require("@/assets/color-suet.jpg"),
                    name: "羊脂玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E7%BE%8A%E8%84%82%E7%8E%89&kdt_id=43111712"
                },{
                    url: require("@/assets/color-block.jpg"),
                    name: "墨玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E5%A2%A8%E7%8E%89&kdt_id=43111712"
                },{
                    url: require("@/assets/color-tangw.jpg"),
                    name: "糖白玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E7%B3%96%E7%99%BD%E7%8E%89&kdt_id=43111712"
                },{
                    url: require("@/assets/color-gw.jpg"),
                    name: "青白玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E9%9D%92%E7%99%BD%E7%8E%89&kdt_id=43111712"
                },{
                    url: require("@/assets/color-tang.jpg"),
                    name: "糖玉",
                    href:"https://shop43303880.youzan.com/wscshop/showcase/feature/search?q=%E7%B3%96%E7%8E%89&kdt_id=43111712"
                },],
                scroll: ''
			};
		},

		methods: {
			btn(key) {
				this.active1 = key;
			},
		},
        mounted() {
        },
	}
</script>

<style scoped>
	a{
		color: #000;
	}
	.leb-box {
		position: absolute;
		top: 92px;
		bottom: 0;
		background: #f5f5f5;
		width: 25%;
		float: left;
		text-align: center;
	}
	
	.leb-box li {
		padding: 15px 5px;
		font-size: 14px;
	}
	
	.active {
		border-left: 3px solid red;
		background: #fff;
		color: #000;
	}
	
	.con {
		width: 75%;
		float: right;
		text-align: center;
		overflow: hidden;
	}
	
	.con p {
		margin-top: 15px;
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: bold;
	}
	
	.percent {
		width: 100%;
	}
	
	.con1 li {
		display: block;
		width: 20%;
		margin-left: 10%;
		float: left;
	}
	
	.con1 li img {
		border-radius: 50%;
	}
</style>