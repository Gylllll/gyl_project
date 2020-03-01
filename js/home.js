/*搜索框*/
$("input").focus(function() {
	$(".header-search-suggest").css("display", "block");
});
$("input").blur(function() {
	$(".header-search-suggest").css("display", "none");
});
/*左侧分类导航栏*/
var $sortLiObjs = $(".sort ul>li");
$sortLiObjs.each(function(i) {
	$(this).mouseover(function() {
		$(".detail .detail-area").removeClass("actives");
		$(".detail .detail-area:nth-child(" + (i + 1) + ")").addClass("actives");
	});
});
$(".detail .detail-area").each(function(i) {
	$(this).mouseover(function() {
		$(".detail .detail-area:nth-child(" + (i + 1) + ")").addClass("actives");
	});
	$(this).mouseout(function() {
		$(".detail .detail-area").removeClass("actives");
	});
});
$(".left-banner").mouseout(function() {
	$(".detail .detail-area").removeClass("actives");
});
/*轮播图*/
/*var $ul=$(".slider-image ul");
$(".slider-image li:first-child").clone().appendTo($ul);
var current=0;
function move(){
	var imgWidth=550;
	current-=30;
	if(current<=-imgWidth*($(".slider-image li").length-1)){
		$ul.css("left","0");
		current=0;
	}else{
		$ul.css("left",current+"px");
	}
}
setInterval(move,100);*/

var $ul = $(".slider-image ul"); //ul
var $pages = $(".slider-page .page"); //页码
var current = 0; //图片页码索引
var imgWidth = 550;
var left = 0; //相对左边
var $pre = $(".btn-pre"); //左
var $next = $(".btn-next"); //右
$pages.each(function(i) {
	$(this).mouseover(function() {
		$pages.css("opacity", "0.2");
		$(".slider-page :nth-child(" + (i + 1) + ")").css("opacity", "1");
		current = i;
	});
	$(this).mouseout(function() {
		$pages.css("opacity", "0.2");
	});
});
$pre.click(function() {
	current--;
	//console.log(current);
	if(current == 0) {
		current = $(".slider-image li").length - 1;
	} else {
		current = current - 1;
	}
});
$next.click(function() {
	if(current == $(".slider-image li").length) {
		current = 0;
	}
});

function move() {
	if(current == $(".slider-image li").length) {
		current = 0;
		$ul.css("left", "0");
		current++;
		$pages.css("opacity", "0.2");
		$(".slider-page :first-child").css("opacity", "1");
	} else {
		left = -current * imgWidth;
		$ul.css("left", left + "px");
		$pages.css("opacity", "0.2");
		current++;
		$(".slider-page :nth-child(" + current + ")").css("opacity", "1");
		//console.log(current);
	}
}
var timeId = setInterval(move, 1000);
/*鼠标移动上去显示小三角形,改变a标签内容*/
/*quality*/
$(".quality-nav li").each(function(i) {
	$(this).mouseover(function() {
		//console.log(i);
		if(i !== 0) { //鼠标经过"有格调"时,不移除样式
			$(".quality-nav li.item").removeClass("active");
			$(".quality-nav li:nth-child(" + (i + 1) + ")").addClass("active");
		}

		var all = [{
			"img": "img/quality/quality1.jpg",
			"main-title": "吉悦蛋糕（大通北店）",
			"sub-title": "蛋糕4选1,约8英寸，圆",
			"symbol": "¥",
			"now": "88",
			"old-price": "门市价¥128",
			"address": "大通北路"
		}, {
			"img": "img/quality/quality2.jpg",
			"main-title": "ido创意蛋糕会所",
			"sub-title": "蛋糕3选1,约8英寸，圆形",
			"symbol": "¥",
			"now": "98",
			"old-price": "门市价¥178",
			"address": "天下广场"
		}, {
			"img": "img/quality/quality3.jpg",
			"main-title": "巧时蛋糕",
			"sub-title": "6英寸皇冠蛋糕1个，约6英寸，圆形",
			"symbol": "¥",
			"now": "88.8",
			"old-price": "门市价¥148",
			"address": "芗城区"
		}, {
			"img": "img/quality/quality4.jpg",
			"main-title": "伊家西点",
			"sub-title": "蛋糕8选1,约8英寸",
			"symbol": "¥",
			"now": "99",
			"old-price": "门市价¥168",
			"address": "荣昌花园"
		}, {
			"img": "img/quality/quality5.jpg",
			"main-title": "储缘蛋糕（浦东街店）",
			"sub-title": "8英寸欧式水果生日蛋糕--领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！1个，约8英寸，圆型",
			"symbol": "¥",
			"now": "89.8",
			"old-price": "门市价¥156",
			"address": "天下广场"
		}, {
			"img": "img/quality/quality6.jpg",
			"main-title": "漳州万达嘉华酒店大堂吧",
			"sub-title": "提拉米苏蛋糕1个，约1磅，方形",
			"symbol": "¥",
			"now": "88",
			"old-price": "门市价¥138",
			"address": "万达广场"
		}];
		if(i == 1) { //全部
			$.each(all, function(i, obj) {
				$(".quality-area a:nth-child(" + (i + 1) + ") .tags").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .price-type").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").remove();

				$(".quality-area a:nth-child(" + (i + 1) + ") img").attr("src", obj["img"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").text(obj["main-title"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").attr("title", obj["main-title"]);
				if(obj["sub-title"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").after($("<div class='sub-title'></div>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").text(obj["sub-title"]);
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").attr("title", obj["sub-title"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .symbol").text(obj["symbol"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .now").text(obj["now"]);
				if(obj["old-price"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .current-price").after($("<span class='old-price'></span>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").text(obj["old-price"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .address").text(obj["address"]);
			});
		}
		var date = [{
			"img": "img/quality/date1.jpg",
			"main-title": "漳州佰翔圆山酒店圆山畔西餐厅",
			"sub-title": "单人自助午餐",
			"symbol": "¥",
			"now": "118",
			"old-price": "门市价¥170.2",
			"address": "芗城区"
		}, {
			"img": "img/quality/date2.jpg",
			"main-title": "必胜客（漳州万达店）",
			"sub-title": "3份【牛排】澳洲西冷牛排1份",
			"symbol": "¥",
			"now": "177",
			"old-price": "门市价¥237",
			"address": "万达广场"
		}, {
			"img": "img/quality/date3.jpg",
			"main-title": "七欣天品蟹轩（漳州至诚广场店）",
			"sub-title": "缤纷海鲜锅2人份1份",
			"symbol": "¥",
			"now": "158",
			"old-price": "门市价¥190",
			"address": "天下广场"
		}, {
			"img": "img/quality/date4.jpg",
			"main-title": "豪客来",
			"sub-title": "臻享2人餐，提供免费WiFi",
			"symbol": "¥",
			"now": "150",
			"old-price": "门市价¥169",
			"address": "沃尔玛"
		}, {
			"img": "img/quality/date5.jpg",
			"main-title": "漳州万达嘉华酒店品珍中餐厅",
			"sub-title": "2-3人商务餐，提供免费WiFi",
			"symbol": "¥",
			"now": "298",
			"old-price": "门市价¥702",
			"address": "万达广场"
		}, {
			"img": "img/quality/date6.jpg",
			"main-title": "漳州万达嘉华酒店美食汇全日餐厅",
			"sub-title": "平日自助晚餐",
			"symbol": "¥",
			"now": "158",
			"old-price": "门市价¥228",
			"address": "万达广场"
		}];
		if(i == 2) { //约会
			$.each(date, function(i, obj) {
				$(".quality-area a:nth-child(" + (i + 1) + ") .tags").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .price-type").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").remove();

				$(".quality-area a:nth-child(" + (i + 1) + ") img").attr("src", obj["img"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").text(obj["main-title"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").attr("title", obj["main-title"]);
				if(obj["sub-title"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").after($("<div class='sub-title'></div>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").text(obj["sub-title"]);
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").attr("title", obj["sub-title"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .symbol").text(obj["symbol"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .now").text(obj["now"]);
				if(obj["old-price"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .current-price").after($("<span class='old-price'></span>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").text(obj["old-price"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .address").text(obj["address"]);
			});
		}
		var people = [{
			"img": "img/quality/people1.jpg",
			"main-title": "品度综合美学形象设计机构",
			"sub-title": "品度综合美学形象设计机构",
			"symbol": "",
			"now": "",
			"old-price": "",
			"address": "万达广场"
		}, {
			"img": "img/quality/people2.jpg",
			"main-title": "美缔名媛瘦身养生会所",
			"sub-title": "美缔名媛瘦身养生会所",
			"symbol": "",
			"now": "",
			"old-price": "",
			"address": "沃尔玛"
		}, {
			"img": "img/quality/people3.jpg",
			"main-title": "MIX HAIR SALON",
			"sub-title": "MIX HAIR SALON",
			"symbol": "",
			"now": "",
			"old-price": "",
			"address": "天下广场"
		}, {
			"img": "img/quality/people4.jpg",
			"main-title": "凯利造型会所",
			"sub-title": "凯利造型会所",
			"symbol": "",
			"now": "",
			"old-price": "",
			"address": "天下广场"
		}, {
			"img": "img/quality/people5.jpg",
			"main-title": "米淇烫染技术全国联盟（新华西南店）",
			"sub-title": "米淇烫染技术全国联盟（新华西南店）",
			"symbol": "",
			"now": "",
			"old-price": "",
			"address": "中闽"
		}, {
			"img": "img/quality/people6.jpg",
			"main-title": "优品沙龙·UP SALON",
			"sub-title": "优品沙龙·UP SALON",
			"symbol": "¥",
			"now": "250",
			"price-type": "/人均",
			"old-price": "",
			"address": "天下广场"
		}];
		if(i == 3) { //丽人
			$.each(people, function(i, obj) {
				$(".quality-area a:nth-child(" + (i + 1) + ") .tags").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .price-type").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").remove();

				$(".quality-area a:nth-child(" + (i + 1) + ") img").attr("src", obj["img"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").text(obj["main-title"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").attr("title", obj["main-title"]);
				if(obj["sub-title"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").after($("<div class='sub-title'></div>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").text(obj["sub-title"]);
					$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").attr("title", obj["sub-title"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .symbol").text(obj["symbol"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .now").text(obj["now"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .price-type").remove();
				if(obj["price-type"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .now").append($("<span class='price-type'>" + obj["price-type"] + "</span>"));
				}
				if(obj["old-price"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .current-price").after($("<span class='old-price'></span>"));
					$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").text(obj["old-price"]);
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .address").text(obj["address"]);
			});
		}

		var travel = [{
			"img": "img/quality/travel1.jpg",
			"main-title": "漳州融信皇冠假日酒店",
			"tags": ["新客超值优惠", "亲子场景酒店", "发票推荐", "亲子酒店点评", "含早"],
			"symbol": "¥",
			"now": "652",
			"price-type": "/起",
			"address": ""
		}, {
			"img": "img/quality/travel2.jpg",
			"main-title": "漳州明发温德姆至尊豪廷大酒店",
			"tags": ["新客超值优惠", "亲子场景酒店", "连住优惠", "早订多减", "发票推荐", "亲子酒店点评", "含早"],
			"symbol": "¥",
			"now": "559",
			"price-type": "/起",
			"address": ""
		}, {
			"img": "img/quality/travel3.jpg",
			"main-title": "龙海招商卡达凯斯美伦山庄",
			"tags": ["新客超值优惠", "预约发票", "房间内消费品", "免押金", "酒店套餐", "天天特价", "连住优惠", "早订多减", "发票推荐", "含早"],
			"symbol": "¥",
			"now": "990",
			"price-type": "/起",
			"address": ""
		}, {
			"img": "img/quality/travel4.jpg",
			"main-title": "漳州万达嘉华酒店",
			"tags": ["新客超值优惠", "亲子场景酒店", "发票推荐", "亲子酒店点评", "含早"],
			"symbol": "¥",
			"now": "652",
			"price-type": "/起",
			"address": ""
		}, {
			"img": "img/quality/travel5.jpg",
			"main-title": "欢墅·度假别墅",
			"tags": ["发票推荐", "含早"],
			"symbol": "¥",
			"now": "1788",
			"price-type": "/起",
			"address": ""
		}, {
			"img": "img/quality/travel6.jpg",
			"main-title": "漳州宾馆",
			"tags": ["新客超值优惠", "发票推荐", "含早"],
			"symbol": "¥",
			"now": "390",
			"price-type": "/起",
			"address": ""
		}];

		if(i == 4) { //旅游
			$.each(travel, function(i, obj) {
				$(".quality-area a:nth-child(" + (i + 1) + ") .tags").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .sub-title").remove();

				$(".quality-area a:nth-child(" + (i + 1) + ") .price-type").remove();
				$(".quality-area a:nth-child(" + (i + 1) + ") .old-price").remove();

				$(".quality-area a:nth-child(" + (i + 1) + ") img").attr("src", obj["img"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").text(obj["main-title"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").attr("title", obj["main-title"]);

				if(obj["tags"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .main-title").after($("<div class='tags'></div>"));
					for(var j = 0; j < obj["tags"].length; j++) {
						$(".quality-area a:nth-child(" + (i + 1) + ") .info .tags").append("<div class='tag'>" + obj["tags"][j] + "</div>");
					}
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .symbol").text(obj["symbol"]);
				$(".quality-area a:nth-child(" + (i + 1) + ") .now").text(obj["now"]);
				if(obj["price-type"]) {
					$(".quality-area a:nth-child(" + (i + 1) + ") .now").append($("<span class='price-type'>" + obj["price-type"] + "</span>"));
				}
				$(".quality-area a:nth-child(" + (i + 1) + ") .address").text(obj["address"]);
			});
		}
	});
});
/*offer*/
$(".offer-nav li").each(function(i) {
	$(this).mouseover(function() {
		//console.log(i);
		if(i !== 0) { //鼠标经过"狠优惠"时,不移除样式
			$(".offer-nav li.item").removeClass("active");
			$(".offer-nav li:nth-child(" + (i + 1) + ")").addClass("active");
		}
	})
});

/*maoyan*/
$(".maoyan-nav li").each(function(i) {
	$(this).mouseover(function() {
		//console.log(i);
		if(i == 1) { //鼠标经过"猫眼电影"和"全部"时,不移除样式
			$(".maoyan-nav li.item").removeClass("active");
			$(".maoyan-nav li:nth-child(2)").addClass("active");
		}
		if(i == 2) { //鼠标经过"猫眼电影"和"全部"时,不移除样式
			$(".maoyan-nav li.item").removeClass("active");
			$(".maoyan-nav li:nth-child(3)").addClass("active");
		}
	})
});
/*左右移动按钮，页面*/
var $slider = $(".hot-movie .slider-content");
/*获取按钮对象*/
var $btnPre = $(".hot-movie .btn-pre");
var $btnNext = $(".hot-movie .btn-next");
var $nowLeft = $slider.position().left;
/*console.log($slider.position().left);*/
/*console.log($(".movie-item").width());--214*/
/*注册点击事件*/
$(".hot-movie .hot-page :nth-child(1)").css("opacity", 1);
$btnPre.click(function() {
	$slider.animate({
		left: '0px'
	}, "slow");
	$(".hot-movie .hot-page .page").css("opacity", 0.2);
	$(".hot-movie .hot-page :nth-child(1)").css("opacity", 1);
});
$btnNext.click(function() {
	/*left=(214+20)*5*/
	$slider.animate({
		left: '-1170px'
	}, "slow");
	$(".hot-movie .hot-page .page").css("opacity", 0.2);
	$(".hot-movie .hot-page :nth-child(2)").css("opacity", 1);
});

/*zhenguo*/
$(".zhenguo-nav li").each(function(i) {
	$(this).mouseover(function() {
		if(i !== 0 && i !== 11) { //鼠标经过"推荐民宿"和"全部"时,不移除样式
			console.log(i);
			$(".zhenguo-nav li.item").removeClass("active");
			$(".zhenguo-nav li:nth-child(" + (i + 1) + ")").addClass("active");
		}
	});
});