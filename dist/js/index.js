$(function(){$(".sidebar_tit").click(function(){$(".right_sidebar").toggleClass("hide")}),$(".times a").click(function(){$(".right_sidebar").removeClass("hide")}),$(".tier1 li").hover(function(){$(this).css("background","#444"),$(this).children(".tier2").css("display","block")},function(){$(this).css("background","#222"),$(this).children(".tier2").css("display","none")}),$(".tier2 li").hover(function(){$(this).css("background","#444"),$(this).children(".tier3").css("display","block")},function(){$(this).css("background","#111"),$(this).children(".tier3").css("display","none")}),$(window).resize(function(i){$(window).width()<735?($(".tier1 li").off("hover"),$(".tier2 li").off("hover"),$(".icon-arrow-bottom-thin").click(function(){$(this).parent().siblings(".tier2").stop(!0).toggle("normal")}),$(".icon-gengduo").click(function(){$(this).parent().siblings(".tier3").stop(!0).toggle("normal")}),$(".pop_btn").click(function(){console.log($(".tier1").css("right")),"0px"!==$(".tier1").css("right")?($(".tier1").stop(!0).animate({right:0},200),$("body").stop(!0).animate({"margin-left":"-276px"},200),$(".navbar").stop(!0).animate({left:"-276px"},200)):($(".tier1").stop(!0).animate({right:"-440px"},200),$("body").stop(!0).animate({"margin-left":0},200),$(".navbar").stop(!0).animate({left:"0px"},200))}),$(".callSiderbar").click(function(){$(".right_sidebar").stop("true").animate({top:"80%"},"normal",function(i){$(document.body).not(".right_sidebar").click(function(i){var t=i||window.event;t.stopPropagation?t.stopPropagation():t.cancleBubble=!0,$(".right_sidebar").stop("true").animate({top:"200%"},"normal")})})})):($(".tier1 li").hover(function(){$(this).css("background","#444"),$(this).children(".tier2").css("display","block")},function(){$(this).css("background","#222"),$(this).children(".tier2").css("display","none")}),$(".tier2 li").hover(function(){$(this).css("background","#444"),$(this).children(".tier3").css("display","block")},function(){$(this).css("background","#111"),$(this).children(".tier3").css("display","none")}))})});