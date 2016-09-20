
		$( "#tabs" ).tabs();

		// 左侧菜单栏固定
		menuFixed('.menu_box','no');

		// 表格初始化
		$("table").tablesorter({ 
	        sortList: [[0,0],[2,0]],
	        headers:{
	        	0:{sorter:false},
	        	1:{sorter:false}
	        }
		}); 



		// 表格排序图标转换
	    $("table thead tr th.canSort").click(function(event) {
	    	var Table = $(this).parent().parent();
	    	var Img = $(this).find('img');
	    	var name = Img.attr('name');

	    	Table.find('img').each(function() {
	    		$(this).attr('src', 'img/sort.png');
	    		$(this).attr('name', '0');
	    	});

	    	if(name == "0"){
	    		Img.attr('src', 'img/sortUp.png');
	    		Img.attr('name', '1');
	    	}
	    	else if(name == "1"){
	    		Img.attr('src', 'img/sortDown.png');
	    		Img.attr('name', '2');	    
	    	}else{
	    		Img.attr('src', 'img/sortUp.png');
	    		Img.attr('name', '1');		    		
	    	}
	    });

	    // 查看大图
	    $('.photo').click(function(event) {
	    	createPicShow();
	    });
