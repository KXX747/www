﻿var mid = "";
var jsonPageInfo = window.jsonPageInfo || {};
$(document).ready(function() {
	var pageId = jsonPageInfo.pageId;
	if (!pageId) {
		pageId = "PC_缺省_" + $("title").html();
	}
	var categoryId = jsonPageInfo.categoryId;
	if (!categoryId) {
		categoryId = "PC_Category";
	}
	var g = BL.Global;
	mid = g.cookie.get("_m_t_i").length > 0 ? g.base64Decode(g.cookie.get("_m_t_i")).split("&mi=")[1] : "";
	var blList;
	var zywId = "";
	var zywnrId = "";
	var zywlx = "";
	if (bl_ad) {
		blList = bl_ad.split("_-_");
		zywId = blList[0] == undefined ? "" : blList[0];
		zywnrId = blList[1] == undefined ? "" : blList[1];
		zywlx = blList[2] == undefined ? "" : blList[2];
	}
	var flagType = "";
	var flagValue = "";
	var businessType = "";
	var businessValue = "";
	var additionType = "";
	var additionValue = "";
	if ("PC_SpecificZone" == categoryId && $("#flashId").val() != undefined) {
		flagType = "卖场id";
		flagValue = $("#flashId").val();
	} else if ("PC_NewBasket" == categoryId && $("#actNo").val() != undefined) {
		flagType = "篮筐id";
		flagValue = $("#actNo").val();
	} else if ("PC_Tuangou" == categoryId && $("#actNo").val() != undefined) {
		additionType = "活动id";
		additionValue = $("#actNo").val();
	} else if ("PC_Shiyong" == categoryId && $("#commentId").val() != undefined) {
		flagType = "试用报告id";
		flagValue = $("#commentId").val();
	} else if ("PC_Shiyong" == categoryId && $("#product_id").val() != undefined) {
		flagType = "试用商品id";
		flagValue = $("#trailGoodsId").val();
	} else if (("PC_Product" == categoryId || "PC_NewBasket" == categoryId || "PC_SpecificZone" == categoryId || "PC_Tuangou" == categoryId ||
			"PC_Zhijiang" == categoryId || "PC_AdvanceSale" == categoryId) && $("#q_productid").val() != undefined) {
		flagType = "商品id";
		flagValue = $("#q_productid").val();
	}

	// 神策PageView
	sa.registerPage({
		memberId : mid,// 用户id
		resourceId : zywId,// 资源位id
		resourceType : zywlx,// 资源位类型
		deployId : unescape(zywnrId),// 内容id
		pageId : pageId,// 页面名称
		categoryId : categoryId,// 业务类型
		mmc : bl_mmc,// 应用市场/站外渠道
		flagType : flagType,// 类型
		flagValue : flagValue,// 内容信息
		businessType : businessType,// 活动类型
		businessValue : businessValue,// 活动信息
		additionType : additionType,
		additionValue : additionValue
	});
	sa.quick('autoTrack');
});

// 百度监控JS代码
$(document).ready(function() {
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?d4bb30b3ba58b04cd3d04be8ebb57263";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
});
