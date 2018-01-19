//  侧边工具栏初始化

$(function(){
	var node =  
	'<div id="side-tools-bar">' +
		'<div class="side-tools-bar-son" >' + 
			'<img src="/images/qq-icon_01.png" style="height: 70%;"  alt="" />' +
			'<div class="side-tools-detail side-tools-QQ" >' +
				'<div class="background-shadow"></div>' +
				'<img src="/images/qq_03.png" alt="" />' +
				'<div class="qq-ringring">' +
					'<div class="qq-ringring-block">' +
						'<img src="/images/qq_07.png" alt="" />' +
						'3861 在线客服' +
					'</div>' +
					'<div class="qq-ringring-block">' +
						'<img src="/images/qq_07.png" alt="" />' +
						'3861 在线客服' +
					'</div>' +
					'<div class="qq-ringring-block">' +
						'<img src="/images/qq_07.png" alt="" />' +
						'3861 在线客服' +
					'</div>' +
					'<div class="qq-ringring-block">' +
						'<img src="/images/qq_07.png" alt="" />' +
						'3861 在线客服' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<div class="side-tools-bar-son" >' +
			'<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>' +
			'<div class="side-tools-detail side-tools-phone" >' +
				'<div class="background-shadow"></div>' +
				'<h1>400-880-3861</h1>' +
				'<img src="/images/call-us_03_09.png" width="112" height="20" alt="" />' +
			'</div>' +
		'</div>' +
		'<div class="side-tools-bar-son" ><a href="questionnaire.html"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></div>' +
		'<div class="side-tools-bar-son" >' +
			'<img src="/images/icons_04.jpg" style="width: 80%;margin-bottom: 8px;" alt="" />' +
			'<div class="side-tools-detail side-tools-wechat" >' +
				'<div class="background-shadow"></div>' +
				'<img src="/images/scan-wechat_03.png" width="186" height="186" alt="" />' +
			'</div>' +
		'</div>' +
		'<div class="side-tools-bar-son" ><span class="glyphicon glyphicon-menu-up" onclick="backToTop()" aria-hidden="true"></span></div>' +
		'<div class="side-tools-bar-son" ><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div>	' +	
	'</div>';
	$("body").append(node)
})





//<div id="side-tools-bar">
//		<div class="side-tools-bar-son" >
//			<img src="/images/qq-icon_01.png" style="height: 70%;"  alt="" />
//			<div class="side-tools-detail side-tools-QQ" >
//				<div class="background-shadow"></div>
//				<img src="/images/qq_03.png" alt="" />
//				<div class="qq-ringring">
//					<div class="qq-ringring-block">
//						<img src="/images/qq_07.png" alt="" />
//						3861 在线客服
//					</div>
//					<div class="qq-ringring-block">
//						<img src="/images/qq_07.png" alt="" />
//						3861 在线客服
//					</div>
//					<div class="qq-ringring-block">
//						<img src="/images/qq_07.png" alt="" />
//						3861 在线客服
//					</div>
//					<div class="qq-ringring-block">
//						<img src="/images/qq_07.png" alt="" />
//						3861 在线客服
//					</div>
//				</div>
//			</div>
//		</div>
//		<div class="side-tools-bar-son" >
//			<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
//			<div class="side-tools-detail side-tools-phone" >
//				<div class="background-shadow"></div>
//				<h1>400-880-3861</h1>
//				<img src="/images/call-us_03_09.png" width="112" height="20" alt="" />
//			</div>
//		</div>
//		<div class="side-tools-bar-son" ><a href="questionnaire.html"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></div>
//		<div class="side-tools-bar-son" >
//			<img src="/images/icons_04.jpg" style="width: 80%;margin-bottom: 8px;" alt="" />
//			<div class="side-tools-detail side-tools-wechat" >
//				<div class="background-shadow"></div>
//				<img src="/images/scan-wechat_03.png" width="186" height="186" alt="" />
//			</div>
//		</div>
//		<div class="side-tools-bar-son" ><span class="glyphicon glyphicon-menu-up" onclick="backToTop()" aria-hidden="true"></span></div>
//		<div class="side-tools-bar-son" ><a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></div>		
//	</div>;