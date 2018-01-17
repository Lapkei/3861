//  侧边工具栏初始化

$(function(){
	var node =  '<div id="side-tools-bar">' +
					'<div><img src="/images/icons_01.jpg" alt="" /></div>' +
					'<div><img src="/images/icons_02.jpg" alt="" /></div>' +
					'<div><a href="questionnaire.html"><img src="/images/icons_03.jpg" alt="" /></a></div>' + 
					'<div><img src="/images/icons_04.jpg" alt="" /></div>' +
					'<div><img src="/images/icons_05.jpg" alt="" onclick="backToTop()" /></div>'+
				'</div>';
	$("body").append(node)
})
