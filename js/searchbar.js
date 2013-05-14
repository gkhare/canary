$(document).ready(function() {
	init_searchbar();
	homepage=true;
});

function init_searchbar () {
	$('#searchbar input').focus();
	$('#searchbar input').keyup(function(e) {
		executeSearch();
	});
	$('#searchbar_button').click(function() {
		executeSearch();
	});
	$('#searchbar').bind('isHomePage', function(event) {
	  if (!homepage) {
	  	$(this).css('margin-top', 40);
	  	$(this).css('margin-left', 75);
	  	$('body').append(callHttp("templates/horizontalSeparator.html"));
	  } else {
	  	alert('ho');
	  }
	});
}

function executeSearch () {
	if (homepage) {
		homepage=false;
		$('#searchbar').trigger('isHomePage');
	}
}


