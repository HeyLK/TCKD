

	// 左侧菜单栏固定
	function menuFixed(Class,add_class){
		    var obj = $(Class);
		    var _getHeight = obj.offset().top;		    
		    window.onscroll = function(){
		    	var Height = $(document).scrollTop();  		
		    	if((Height - _getHeight)>=0 ){
		    		 obj.css('position', 'fixed');
		    		 obj.css('top', 0);
		    		 if(add_class != 'no'){
		    		 	obj.addClass(add_class);
		    		 }
		    	}else{
		    		obj.css('position', 'relative');
		    	}
		    }
		}

	// tab转换
	$('.title_option a').click(function(event) {
		$('.title_option a').removeClass('select');
		$(this).addClass('select');
	});

	$('.btn').click(function(event) {
		$('.show').click();
	});

	// 查看大图
	function createPicShow(){
		var html = "<div class = 'background'><a href='#' onclick = 'closed()' title = '关闭大图'><img class='close' src='img/close.png' alt=''></a><img class='show' src='img/test.png' alt=''></div>";
		var box = $(html).appendTo($('body'));
		$('.background').fadeIn('400');		
	}

	// 关闭大图
	function closed(){
		$('.background').remove();
	}



