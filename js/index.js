
$(function() {
	//导航部分
	$('.nav-ul button').click(function(){
		if($('.nav-ul>ul').css("display")=="none"){
			$('.nav-ul>ul').fadeIn()
		}else{
			$('.nav-ul>ul').fadeOut()
		}
	})
	$('.options .option').eq(0).show().siblings().hide();
	
	
	//产品中心产品轮播图
	
	var page = 1;
	var i = 1;
	var liH =$('#Carousel li').outerHeight();
	var lilen = $('#Carousel li').length;
	var len = Math.ceil( lilen / i );
	var ali =$('#Carousel li');
	var src =[];
	
	function change(index){
		var imgSrc = $('#Carousel li').eq(index).find('img').attr('src');
		$('.bigImg img').attr('src',imgSrc);
		$('#Carousel li').eq(index).find('img').addClass('active');
		$('#Carousel li').eq(index).siblings().find('img').removeClass('active');
	}
	
	$('#Carousel li').click(function(){
		var index =$(this).index();
		change(index);
		
	})
	
	$('.nextBtn').click(function() {
		if( page == len ) {
				$('#Carousel ul').animate({top:0},'slow');
				page = 1;
				
			}else{
				$('#Carousel ul').animate({top:'-=' + liH},'slow');
				page++;
			}
			
			index =page-1;
			change(index);
		});
	$('.prevBtn').click(function() {
		if( page == 1 ) {
			$('#Carousel ul').animate({top:'-=' + liH*(len - 1)},'slow');
			page = len;
		}else{
			$('#Carousel ul').animate({top:'+=' + liH},'slow');
			page--;
		}
		index =page-1;
		change(index);
	});
	
	
	$(".optionsNav li").click(function(){
		var This = $(this);
		showPage(This);
	});
	
	$(".pageNav  .pageNav_li").click(function(){
			var This = $(this);
			showPage(This);
	});
	
});
function showPage(This){
	This.addClass('active').siblings().removeClass('active');
	$('.options .option').eq(This.index()).fadeIn().siblings().fadeOut();
}