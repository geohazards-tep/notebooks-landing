$(document).ready(function(){
	
	// log load function
	function loadLog(){
		
		$('#logContent, .logTitle, #logReloadBtn').hide();
		$('#logLoader').show();
		
		$.get('install.log').then(function(log){
			setTimeout(function(){
				$('#logLoader').hide();
				$('#logContent').text(log);
				$('#logContent, .logTitle, #logReloadBtn').show();
			},1000);
		});
	};
	
	var isLogVisible = false;
	
	// reload button management
	$('#logReloadBtn').click(function(){
		loadLog();
		return false;
	});
	
	//listen for CTRL+K
	$(window).keypress(function(event) {
		if (!(event.which == 107 && event.ctrlKey) && !(event.which == 11))
			return true;
		
		if (isLogVisible)
			$('#log').hide();
		else {
			$('#log').show();
			loadLog();
		}
		isLogVisible = !isLogVisible;
		
		return false;
	});

	// init carousel
	$('#myCarousel').carousel();
	
});
