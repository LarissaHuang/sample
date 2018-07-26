$(document).ready(function() {

	 $( "#accordion" ).accordion();

	$('#tab-js').click(function(e){
		e.preventDefault();

		if ( $('#js').hasClass('active') ){

		}else{
			$('#js').toggleClass('active');
		}

		$('#jq').removeClass('active');
		$('#gal').removeClass('active');
		
	});

	$('#tab-jq').click(function(e){
		e.preventDefault();

		if ( $('#jq').hasClass('active') ){

		}else{
			$('#jq').toggleClass('active');
		}

		$('#js').removeClass('active');
		$('#gal').removeClass('active');
		
	});


	$('#tab-gal').click(function(e){
		e.preventDefault();

		if ( $('#gal').hasClass('active') ){

		}else{
			$('#gal').toggleClass('active');
		}

		$('#js').removeClass('active');
		$('#jq').removeClass('active');
		
	});




	$('#show2').click(function(e){
		e.preventDefault();
		$('#jq2').toggleClass('active');
	});


	$('#show3').click(function(e){
		e.preventDefault();
		$('#jq3').toggleClass('active');
	});


	$('#show1').click(function(e){
		e.preventDefault();
		$('#jq1').toggleClass('active');
	});


});
